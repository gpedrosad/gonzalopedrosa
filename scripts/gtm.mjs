#!/usr/bin/env node
/**
 * Google Tag Manager API (OAuth, mismo cliente desktop que GSC).
 *
 *   npm run gtm:auth
 *   npm run gtm:list
 *   npm run gtm:fix-init          # Google tag → Initialization (dry-run)
 *   npm run gtm:fix-init -- --apply
 */

import { createServer } from "node:http";
import { exec } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { google } from "googleapis";

const OAUTH_CLIENT_PATH = resolve(
  process.cwd(),
  process.env.GTM_OAUTH_CLIENT_PATH ??
    process.env.GOOGLE_OAUTH_CLIENT_PATH ??
    ".secrets/gcp-oauth-client.json",
);
const OAUTH_TOKEN_PATH = resolve(
  process.cwd(),
  process.env.GTM_OAUTH_TOKEN_PATH ?? ".secrets/gtm-oauth-token.json",
);
const OAUTH_REDIRECT_PORT = Number(process.env.GTM_OAUTH_PORT ?? 53682);
const OAUTH_REDIRECT_URI = `http://127.0.0.1:${OAUTH_REDIRECT_PORT}/oauth2callback`;
const CONTAINER_PUBLIC_ID = process.env.GTM_CONTAINER_ID ?? process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-N3DXMKTR";
const INIT_TRIGGER_ID = "2147479553";
const SCOPES = [
  "https://www.googleapis.com/auth/tagmanager.readonly",
  "https://www.googleapis.com/auth/tagmanager.edit.containers",
  "https://www.googleapis.com/auth/tagmanager.edit.containerversions",
  "https://www.googleapis.com/auth/tagmanager.publish",
];

const args = process.argv.slice(2);
const isApply = args.includes("--apply");
const command = args.includes("--auth") ? "auth" : args.find((a) => !a.startsWith("--")) ?? "list";

const BUILTIN_TRIGGERS = {
  "2147479549": "Consent Initialization",
  "2147479553": "Initialization - All Pages",
  "2147479572": "DOM Ready",
  "2147479573": "Window Loaded",
  "2147479574": "All Pages (Page View)",
};

const openBrowser = (url) => {
  const commandLine =
    process.platform === "darwin"
      ? `open "${url}"`
      : process.platform === "win32"
        ? `start "" "${url}"`
        : `xdg-open "${url}"`;
  exec(commandLine);
};

const loadOAuthClientSecrets = () => {
  if (!existsSync(OAUTH_CLIENT_PATH)) {
    console.error(`No existe el cliente OAuth: ${OAUTH_CLIENT_PATH}`);
    process.exit(1);
  }
  const raw = JSON.parse(readFileSync(OAUTH_CLIENT_PATH, "utf8"));
  const config = raw.installed ?? raw.web ?? raw;
  if (!config.client_id || !config.client_secret) {
    console.error("El JSON OAuth debe tener client_id y client_secret.");
    process.exit(1);
  }
  return config;
};

const createOAuthClient = () => {
  const { client_id, client_secret } = loadOAuthClientSecrets();
  return new google.auth.OAuth2(client_id, client_secret, OAUTH_REDIRECT_URI);
};

const runOAuthFlow = async () => {
  const oauth2Client = createOAuthClient();
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
    prompt: "consent",
  });

  console.log("\n🔐 Inicia sesión con el Gmail que administra Tag Manager.\n");
  console.log("Si el navegador falla, el redirect en GCP OAuth debe incluir:\n", OAUTH_REDIRECT_URI, "\n");

  const code = await new Promise((resolvePromise, reject) => {
    const server = createServer((req, res) => {
      const requestUrl = new URL(req.url ?? "/", OAUTH_REDIRECT_URI);
      if (requestUrl.pathname !== "/oauth2callback") {
        res.writeHead(404);
        res.end();
        return;
      }

      const authError = requestUrl.searchParams.get("error");
      if (authError) {
        res.writeHead(400, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>Error de autorización</h1>");
        server.close();
        reject(new Error(authError));
        return;
      }

      const authCode = requestUrl.searchParams.get("code");
      if (!authCode) {
        res.writeHead(400, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>Código no recibido</h1>");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end("<h1>✓ Autorizado</h1><p>Cierra esta pestaña.</p>");
      server.close();
      resolvePromise(authCode);
    });

    server.listen(OAUTH_REDIRECT_PORT, "127.0.0.1", () => {
      console.log(`Abriendo navegador…\n${authUrl}\n`);
      openBrowser(authUrl);
    });
    server.on("error", reject);
  });

  const { tokens } = await oauth2Client.getToken(code);
  writeFileSync(OAUTH_TOKEN_PATH, JSON.stringify(tokens, null, 2), "utf8");
  console.log(`\n✓ Token guardado en ${OAUTH_TOKEN_PATH}`);
  console.log("Siguiente: npm run gtm:list\n");
};

const getAuth = async () => {
  if (!existsSync(OAUTH_TOKEN_PATH)) {
    console.error("No hay token. Ejecuta: npm run gtm:auth");
    process.exit(1);
  }
  const oauth2Client = createOAuthClient();
  oauth2Client.setCredentials(JSON.parse(readFileSync(OAUTH_TOKEN_PATH, "utf8")));
  oauth2Client.on("tokens", (tokens) => {
    const current = JSON.parse(readFileSync(OAUTH_TOKEN_PATH, "utf8"));
    writeFileSync(OAUTH_TOKEN_PATH, JSON.stringify({ ...current, ...tokens }, null, 2), "utf8");
  });
  return oauth2Client;
};

const getTagmanager = async () => google.tagmanager({ version: "v2", auth: await getAuth() });

const loadSiteWorkspace = async (tagmanager) => {
  const accounts = (await tagmanager.accounts.list()).data.account ?? [];
  const containersByAccount = new Map();
  for (const account of accounts) {
    const res = await tagmanager.accounts.containers.list({
      parent: `accounts/${account.accountId}`,
    });
    containersByAccount.set(account.accountId, res.data.container ?? []);
  }
  const found = findContainer(accounts, containersByAccount);
  if (!found) throw new Error(`No encontré ${CONTAINER_PUBLIC_ID}`);
  const parent = `accounts/${found.account.accountId}/containers/${found.container.containerId}`;
  const workspaces = (await tagmanager.accounts.containers.workspaces.list({ parent })).data.workspace ?? [];
  const workspace = workspaces[0];
  if (!workspace) throw new Error("Sin workspace");
  return { ...found, parent, workspace, workspaceParent: `${parent}/workspaces/${workspace.workspaceId}` };
};

const labelTrigger = (id, triggers = []) =>
  triggers.find((t) => t.triggerId === id)?.name ?? BUILTIN_TRIGGERS[id] ?? id;

const findContainer = (accounts, containersByAccount) => {
  for (const account of accounts) {
    const containers = containersByAccount.get(account.accountId) ?? [];
    const match = containers.find((c) => c.publicId === CONTAINER_PUBLIC_ID);
    if (match) return { account, container: match };
  }
  return null;
};

const listContainer = async () => {
  const auth = await getAuth();
  const tagmanager = google.tagmanager({ version: "v2", auth });
  const accountsRes = await tagmanager.accounts.list();
  const accounts = accountsRes.data.account ?? [];

  if (accounts.length === 0) {
    console.log("\nNo hay cuentas de Tag Manager visibles con este Gmail.\n");
    return;
  }

  const containersByAccount = new Map();
  for (const account of accounts) {
    const res = await tagmanager.accounts.containers.list({
      parent: `accounts/${account.accountId}`,
    });
    containersByAccount.set(account.accountId, res.data.container ?? []);
  }

  console.log("\n=== CUENTAS GTM ===\n");
  for (const account of accounts) {
    console.log(`- ${account.name} (${account.accountId})`);
    for (const container of containersByAccount.get(account.accountId) ?? []) {
      const mark = container.publicId === CONTAINER_PUBLIC_ID ? " ← sitio" : "";
      console.log(`  · ${container.publicId} ${container.name}${mark}`);
    }
  }

  const found = findContainer(accounts, containersByAccount);
  if (!found) {
    console.log(`\nNo encontré ${CONTAINER_PUBLIC_ID} en estas cuentas.\n`);
    return;
  }

  const { account, container } = found;
  const parent = `accounts/${account.accountId}/containers/${container.containerId}`;
  const workspacesRes = await tagmanager.accounts.containers.workspaces.list({ parent });
  const workspaces = workspacesRes.data.workspace ?? [];
  const workspace = workspaces[0];

  console.log(`\n=== ${CONTAINER_PUBLIC_ID} · ${container.name} ===`);
  console.log(`Cuenta: ${account.name}`);
  console.log(`Workspace: ${workspace?.name ?? "—"} (${workspace?.workspaceId ?? "—"})\n`);

  if (!workspace) return;

  const workspaceParent = `${parent}/workspaces/${workspace.workspaceId}`;
  const [tagsRes, triggersRes] = await Promise.all([
    tagmanager.accounts.containers.workspaces.tags.list({ parent: workspaceParent }),
    tagmanager.accounts.containers.workspaces.triggers.list({ parent: workspaceParent }),
  ]);

  const tags = tagsRes.data.tag ?? [];
  const triggers = triggersRes.data.trigger ?? [];

  console.log("=== ETIQUETAS ===");
  for (const tag of tags) {
    const firing = (tag.firingTriggerId ?? []).map((id) => labelTrigger(id, triggers)).join(", ") || "—";
    console.log(`- ${tag.name} [${tag.type}]`);
    console.log(`  trigger: ${firing}`);
  }

  console.log("\n=== TRIGGERS ===");
  for (const trigger of triggers) {
    const event = trigger.customEventFilter?.[0]?.parameter?.find((p) => p.key === "arg0")?.value;
    const extra = event ? ` · event=${event}` : "";
    console.log(`- ${trigger.name} [${trigger.type}]${extra}`);
  }
  console.log("");
};

const fixGoogleTagInit = async () => {
  const tagmanager = await getTagmanager();
  const { workspace, workspaceParent } = await loadSiteWorkspace(tagmanager);
  const tags = (await tagmanager.accounts.containers.workspaces.tags.list({ parent: workspaceParent }))
    .data.tag ?? [];
  const googleTag = tags.find((tag) => tag.type === "googtag");
  if (!googleTag) throw new Error("No encontré la Etiqueta de Google (googtag)");

  const current = (googleTag.firingTriggerId ?? []).join(",");
  const already = (googleTag.firingTriggerId ?? []).includes(INIT_TRIGGER_ID);
  console.log(`\n${googleTag.name}`);
  console.log(`  trigger actual: ${(googleTag.firingTriggerId ?? []).map((id) => labelTrigger(id)).join(", ")}`);
  console.log(`  destino: ${labelTrigger(INIT_TRIGGER_ID)}`);

  if (already && googleTag.firingTriggerId?.length === 1) {
    console.log("\nYa está en Initialization. Nada que cambiar.\n");
    return;
  }

  console.log(`\n${isApply ? "APLICAR + publicar" : "DRY-RUN"}`);
  if (!isApply) {
    console.log("✓ validate OK — corre: npm run gtm:fix-init -- --apply\n");
    return;
  }

  const fresh = (
    await tagmanager.accounts.containers.workspaces.tags.get({ path: googleTag.path })
  ).data;
  await tagmanager.accounts.containers.workspaces.tags.update({
    path: fresh.path,
    fingerprint: fresh.fingerprint,
    requestBody: {
      name: fresh.name,
      type: fresh.type,
      parameter: fresh.parameter,
      firingTriggerId: [INIT_TRIGGER_ID],
      tagFiringOption: fresh.tagFiringOption,
    },
  });

  const versionRes = await tagmanager.accounts.containers.workspaces.create_version({
    path: workspace.path,
    requestBody: {
      name: "Google tag → Initialization",
      notes: `AW-17861931009: Window Loaded (${current}) → Initialization (${INIT_TRIGGER_ID}). 2026-09-06`,
    },
  });
  const versionPath = versionRes.data.containerVersion?.path;
  if (!versionPath) throw new Error("create_version no devolvió path");
  await tagmanager.accounts.containers.versions.publish({ path: versionPath });
  console.log(`✓ Publicado ${versionRes.data.containerVersion?.name ?? versionPath}\n`);
};

const fail = (error) => {
  const message = error.message ?? String(error);
  if (/Tag Manager API has not been used|accessNotConfigured/i.test(message)) {
    console.error(`
Falta habilitar Tag Manager API en el proyecto GCP:
https://console.developers.google.com/apis/api/tagmanager.googleapis.com/overview?project=proyectogonzalo-496821
`);
  }
  if (/insufficient|insufficientPermissions|ACCESS_TOKEN_SCOPE|insufficient authentication/i.test(message)) {
    console.error("Falta scope de edición. Ejecuta: npm run gtm:auth\n");
  }
  console.error(message);
  process.exit(1);
};

if (command === "auth") {
  runOAuthFlow().catch(fail);
} else if (command === "fix-init") {
  fixGoogleTagInit().catch(fail);
} else {
  listContainer().catch(fail);
}
