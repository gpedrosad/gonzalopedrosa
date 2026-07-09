"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import type {
  AdsManageAction,
  AdsManageAd,
  AdsManageAdGroup,
  AdsManageCampaign,
  AdsManageData,
  AdsManageKeyword,
  EntityStatus,
} from "@/lib/google-ads-manage-types";
import { formatMoneyInput } from "@/lib/google-ads-manage-types";

import { GscCard } from "../../../gsc/components/GscCard";
import { GscSectionTitle } from "../../../gsc/components/GscSectionTitle";
import { money } from "../../components/ads-format";

const inputStyle = {
  padding: "0.45rem 0.6rem",
  borderRadius: 8,
  border: "1px solid #ddd",
  fontSize: "0.875rem",
  minWidth: 0,
} as const;

const buttonStyle = {
  padding: "0.45rem 0.85rem",
  borderRadius: 8,
  border: "1px solid #ccc",
  background: "#111",
  color: "#fff",
  fontSize: "0.8125rem",
  cursor: "pointer",
} as const;

const secondaryButtonStyle = {
  ...buttonStyle,
  background: "#fff",
  color: "#333",
} as const;

async function postAction(
  keyParam: string | undefined,
  payload: AdsManageAction & { validateOnly?: boolean },
) {
  const res = await fetch("/api/interno/ads/manage", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, key: keyParam }),
  });
  const json = (await res.json()) as { error?: string; message?: string };
  if (!res.ok) throw new Error(json.error ?? "Error al aplicar cambio");
  return json.message ?? "OK";
}

function StatusToggle({
  current,
  onChange,
  disabled,
}: {
  current: EntityStatus;
  onChange: (next: EntityStatus) => void;
  disabled?: boolean;
}) {
  return (
    <select
      value={current}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value as EntityStatus)}
      style={inputStyle}
    >
      <option value="ENABLED">Activa</option>
      <option value="PAUSED">Pausada</option>
    </select>
  );
}

function CampaignRow({
  row,
  currency,
  keyParam,
  onDone,
}: {
  row: AdsManageCampaign;
  currency: string;
  keyParam?: string;
  onDone: (msg: string) => void;
}) {
  const [budget, setBudget] = useState(formatMoneyInput(row.budgetAmountMicros));
  const [targetCpa, setTargetCpa] = useState(
    row.targetCpaMicros ? formatMoneyInput(row.targetCpaMicros) : "",
  );
  const [status, setStatus] = useState(row.status);
  const [busy, setBusy] = useState(false);

  const run = async (action: AdsManageAction, validateOnly = false) => {
    setBusy(true);
    try {
      const msg = await postAction(keyParam, { ...action, validateOnly });
      onDone(msg);
    } catch (error) {
      onDone(error instanceof Error ? error.message : "Error");
    } finally {
      setBusy(false);
    }
  };

  const saveBudget = (e: FormEvent) => {
    e.preventDefault();
    const amountMicros = Math.round(Number.parseFloat(budget.replace(",", ".")) * 1_000_000);
    void run({ action: "updateBudget", budgetResourceName: row.budgetResourceName, amountMicros });
  };

  const saveTargetCpa = (e: FormEvent) => {
    e.preventDefault();
    const targetCpaMicros = Math.round(Number.parseFloat(targetCpa.replace(",", ".")) * 1_000_000);
    void run({ action: "setTargetCpa", campaignResourceName: row.resourceName, targetCpaMicros });
  };

  const saveStatus = () => {
    void run({ action: "setStatus", entity: "campaign", resourceName: row.resourceName, status });
  };

  return (
    <GscCard>
      <p style={{ fontWeight: 700, margin: "0 0 0.35rem" }}>{row.name}</p>
      <p style={{ fontSize: "0.8125rem", color: "#666", margin: "0 0 1rem" }}>
        Estrategia: {row.biddingStrategyType} · Presupuesto diario actual:{" "}
        {money(row.budgetAmountMicros, currency)}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "end" }}>
        <form onSubmit={saveBudget} style={{ display: "flex", gap: "0.5rem", alignItems: "end" }}>
          <label style={{ fontSize: "0.8125rem" }}>
            Presupuesto/día ({currency})
            <input
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              style={{ ...inputStyle, display: "block", marginTop: "0.25rem", width: 100 }}
            />
          </label>
          <button type="submit" disabled={busy} style={buttonStyle}>
            Guardar
          </button>
        </form>

        {(row.biddingStrategyType.includes("Maximize") ||
          row.biddingStrategyType.includes("Target CPA")) && (
          <form onSubmit={saveTargetCpa} style={{ display: "flex", gap: "0.5rem", alignItems: "end" }}>
            <label style={{ fontSize: "0.8125rem" }}>
              CPA objetivo ({currency})
              <input
                value={targetCpa}
                onChange={(e) => setTargetCpa(e.target.value)}
                placeholder="opcional"
                style={{ ...inputStyle, display: "block", marginTop: "0.25rem", width: 100 }}
              />
            </label>
            <button type="submit" disabled={busy || !targetCpa} style={secondaryButtonStyle}>
              CPA
            </button>
          </form>
        )}

        <label style={{ fontSize: "0.8125rem" }}>
          Estado
          <div style={{ marginTop: "0.25rem", display: "flex", gap: "0.5rem" }}>
            <StatusToggle current={status} onChange={setStatus} disabled={busy} />
            <button type="button" disabled={busy} onClick={saveStatus} style={secondaryButtonStyle}>
              Aplicar
            </button>
          </div>
        </label>
      </div>
    </GscCard>
  );
}

function AdGroupRow({
  row,
  keyParam,
  onDone,
}: {
  row: AdsManageAdGroup;
  keyParam?: string;
  onDone: (msg: string) => void;
}) {
  const [bid, setBid] = useState(row.cpcBidMicros ? formatMoneyInput(row.cpcBidMicros) : "");
  const [status, setStatus] = useState(row.status);
  const [busy, setBusy] = useState(false);

  return (
    <tr>
      <td style={{ padding: "0.5rem 0.75rem", fontSize: "0.8125rem" }}>{row.campaignName}</td>
      <td style={{ padding: "0.5rem 0.75rem", fontSize: "0.8125rem" }}>{row.name}</td>
      <td style={{ padding: "0.5rem 0.75rem" }}>
        <input
          value={bid}
          onChange={(e) => setBid(e.target.value)}
          placeholder={row.cpcBidMicros ? undefined : "auto"}
          style={{ ...inputStyle, width: 72 }}
        />
      </td>
      <td style={{ padding: "0.5rem 0.75rem" }}>
        <StatusToggle current={status} onChange={setStatus} disabled={busy} />
      </td>
      <td style={{ padding: "0.5rem 0.75rem" }}>
        <button
          type="button"
          disabled={busy}
          style={secondaryButtonStyle}
          onClick={() => {
            const tasks: Promise<string>[] = [];
            if (bid) {
              const cpcBidMicros = Math.round(Number.parseFloat(bid.replace(",", ".")) * 1_000_000);
              tasks.push(
                postAction(keyParam, {
                  action: "setBid",
                  entity: "ad_group",
                  resourceName: row.resourceName,
                  cpcBidMicros,
                }),
              );
            }
            if (status !== row.status) {
              tasks.push(
                postAction(keyParam, {
                  action: "setStatus",
                  entity: "ad_group",
                  resourceName: row.resourceName,
                  status,
                }),
              );
            }
            if (tasks.length === 0) {
              onDone("Sin cambios");
              return;
            }
            setBusy(true);
            Promise.all(tasks)
              .then((msgs) => onDone(msgs.join(" · ")))
              .catch((error) =>
                onDone(error instanceof Error ? error.message : "Error"),
              )
              .finally(() => setBusy(false));
          }}
        >
          Guardar
        </button>
      </td>
    </tr>
  );
}

function KeywordRow({
  row,
  keyParam,
  onDone,
}: {
  row: AdsManageKeyword;
  keyParam?: string;
  onDone: (msg: string) => void;
}) {
  const defaultBid = row.cpcBidMicros ?? row.effectiveCpcBidMicros;
  const [bid, setBid] = useState(defaultBid ? formatMoneyInput(defaultBid) : "");
  const [status, setStatus] = useState(row.status);
  const [busy, setBusy] = useState(false);

  return (
    <tr>
      <td style={{ padding: "0.5rem 0.75rem", fontSize: "0.8125rem" }}>{row.adGroupName}</td>
      <td style={{ padding: "0.5rem 0.75rem", fontSize: "0.8125rem" }}>
        {row.text} <span style={{ color: "#999" }}>({row.matchType})</span>
      </td>
      <td style={{ padding: "0.5rem 0.75rem" }}>
        <input
          value={bid}
          onChange={(e) => setBid(e.target.value)}
          style={{ ...inputStyle, width: 72 }}
        />
      </td>
      <td style={{ padding: "0.5rem 0.75rem" }}>
        <StatusToggle current={status} onChange={setStatus} disabled={busy} />
      </td>
      <td style={{ padding: "0.5rem 0.75rem" }}>
        <button
          type="button"
          disabled={busy}
          style={secondaryButtonStyle}
          onClick={() => {
            const tasks: Promise<string>[] = [];
            if (bid) {
              const cpcBidMicros = Math.round(Number.parseFloat(bid.replace(",", ".")) * 1_000_000);
              tasks.push(
                postAction(keyParam, {
                  action: "setBid",
                  entity: "keyword",
                  resourceName: row.resourceName,
                  cpcBidMicros,
                }),
              );
            }
            if (status !== row.status) {
              tasks.push(
                postAction(keyParam, {
                  action: "setStatus",
                  entity: "keyword",
                  resourceName: row.resourceName,
                  status,
                }),
              );
            }
            if (tasks.length === 0) {
              onDone("Sin cambios");
              return;
            }
            setBusy(true);
            Promise.all(tasks)
              .then((msgs) => onDone(msgs.join(" · ")))
              .catch((error) =>
                onDone(error instanceof Error ? error.message : "Error"),
              )
              .finally(() => setBusy(false));
          }}
        >
          Guardar
        </button>
      </td>
    </tr>
  );
}

function AdEditor({
  row,
  keyParam,
  onDone,
}: {
  row: AdsManageAd;
  keyParam?: string;
  onDone: (msg: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [finalUrl, setFinalUrl] = useState(row.finalUrls[0] ?? "");
  const [headlines, setHeadlines] = useState(row.headlines.join("\n"));
  const [descriptions, setDescriptions] = useState(row.descriptions.join("\n"));
  const [path1, setPath1] = useState(row.path1);
  const [path2, setPath2] = useState(row.path2);
  const [status, setStatus] = useState(row.status);
  const [busy, setBusy] = useState(false);

  const submit = async (simulate: boolean) => {
    setBusy(true);
    try {
      const headlineList = headlines.split("\n").map((s) => s.trim()).filter(Boolean);
      const descriptionList = descriptions.split("\n").map((s) => s.trim()).filter(Boolean);
      const msg = await postAction(keyParam, {
        action: "replaceAd",
        adGroupResourceName: row.adGroupResourceName,
        oldAdResourceName: row.resourceName,
        finalUrl,
        headlines: headlineList,
        descriptions: descriptionList,
        path1: path1 || undefined,
        path2: path2 || undefined,
        validateOnly: simulate,
      });
      onDone(msg);
      if (!simulate) setOpen(false);
    } catch (error) {
      onDone(error instanceof Error ? error.message : "Error");
    } finally {
      setBusy(false);
    }
  };

  const toggleStatus = async () => {
    const next: EntityStatus = status === "ENABLED" ? "PAUSED" : "ENABLED";
    setBusy(true);
    try {
      const msg = await postAction(keyParam, {
        action: "setStatus",
        entity: "ad",
        resourceName: row.resourceName,
        status: next,
      });
      setStatus(next);
      onDone(msg);
    } catch (error) {
      onDone(error instanceof Error ? error.message : "Error");
    } finally {
      setBusy(false);
    }
  };

  return (
    <GscCard>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
        <div>
          <p style={{ fontWeight: 600, margin: "0 0 0.25rem" }}>{row.adGroupName}</p>
          <p style={{ fontSize: "0.8125rem", color: "#666", margin: 0 }}>
            {row.finalUrls[0] ?? "—"} · {status === "ENABLED" ? "Activo" : "Pausado"} ·{" "}
            {row.headlines.length} headlines
          </p>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <button type="button" style={secondaryButtonStyle} disabled={busy} onClick={toggleStatus}>
            {status === "ENABLED" ? "Pausar" : "Activar"}
          </button>
          <button type="button" style={buttonStyle} disabled={busy} onClick={() => setOpen((v) => !v)}>
            {open ? "Cerrar editor" : "Editar creativo"}
          </button>
        </div>
      </div>

      {open ? (
        <div style={{ marginTop: "1rem", display: "grid", gap: "0.75rem" }}>
          <label style={{ fontSize: "0.8125rem" }}>
            URL final
            <input
              value={finalUrl}
              onChange={(e) => setFinalUrl(e.target.value)}
              style={{ ...inputStyle, display: "block", marginTop: "0.25rem", width: "100%" }}
            />
          </label>
          <label style={{ fontSize: "0.8125rem" }}>
            Headlines (una por línea, mín. 3)
            <textarea
              value={headlines}
              onChange={(e) => setHeadlines(e.target.value)}
              rows={6}
              style={{ ...inputStyle, display: "block", marginTop: "0.25rem", width: "100%" }}
            />
          </label>
          <label style={{ fontSize: "0.8125rem" }}>
            Descriptions (una por línea, mín. 2)
            <textarea
              value={descriptions}
              onChange={(e) => setDescriptions(e.target.value)}
              rows={4}
              style={{ ...inputStyle, display: "block", marginTop: "0.25rem", width: "100%" }}
            />
          </label>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <label style={{ fontSize: "0.8125rem" }}>
              Path 1
              <input
                value={path1}
                onChange={(e) => setPath1(e.target.value)}
                style={{ ...inputStyle, display: "block", marginTop: "0.25rem", width: 120 }}
              />
            </label>
            <label style={{ fontSize: "0.8125rem" }}>
              Path 2
              <input
                value={path2}
                onChange={(e) => setPath2(e.target.value)}
                style={{ ...inputStyle, display: "block", marginTop: "0.25rem", width: 120 }}
              />
            </label>
          </div>
          <p style={{ fontSize: "0.75rem", color: "#888", margin: 0 }}>
            Google no permite editar URL/copy in-place: se crea un RSA nuevo y se pausa el anterior.
          </p>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <button
              type="button"
              disabled={busy}
              style={secondaryButtonStyle}
              onClick={() => submit(true)}
            >
              Simular (validate_only)
            </button>
            <button type="button" disabled={busy} style={buttonStyle} onClick={() => submit(false)}>
              Publicar cambios
            </button>
          </div>
        </div>
      ) : null}
    </GscCard>
  );
}

export function AdsManagePanel({
  data,
  keyParam,
}: {
  data: AdsManageData;
  keyParam?: string;
}) {
  const router = useRouter();
  const [flash, setFlash] = useState<string | null>(null);

  const onDone = (msg: string) => {
    setFlash(msg);
    router.refresh();
  };

  return (
    <>
      {flash ? (
        <GscCard>
          <p style={{ margin: 0, fontSize: "0.875rem", color: "#333" }}>{flash}</p>
        </GscCard>
      ) : null}

      <section style={{ marginBottom: "2.5rem" }}>
        <GscSectionTitle>Campañas · presupuesto y estrategia</GscSectionTitle>
        <div style={{ display: "grid", gap: "0.75rem" }}>
          {data.campaigns.map((row) => (
            <CampaignRow
              key={row.resourceName}
              row={row}
              currency={data.currency}
              keyParam={keyParam}
              onDone={onDone}
            />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <GscSectionTitle>Grupos de anuncios · pujas y estado</GscSectionTitle>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #eee", textAlign: "left" }}>
                {["Campaña", "Grupo", `Puja CPC (${data.currency})`, "Estado", ""].map((h) => (
                  <th key={h} style={{ padding: "0.5rem 0.75rem", color: "#666", fontWeight: 600 }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.adGroups.map((row) => (
                <AdGroupRow
                  key={row.resourceName}
                  row={row}
                  keyParam={keyParam}
                  onDone={onDone}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <GscSectionTitle>Keywords · pujas y estado</GscSectionTitle>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #eee", textAlign: "left" }}>
                {["Grupo", "Keyword", `Puja (${data.currency})`, "Estado", ""].map((h) => (
                  <th key={h} style={{ padding: "0.5rem 0.75rem", color: "#666", fontWeight: 600 }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.keywords.map((row) => (
                <KeywordRow key={row.resourceName} row={row} keyParam={keyParam} onDone={onDone} />
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <GscSectionTitle>Anuncios RSA · creativos y URLs</GscSectionTitle>
        <div style={{ display: "grid", gap: "0.75rem" }}>
          {data.ads.map((row) => (
            <AdEditor key={row.resourceName} row={row} keyParam={keyParam} onDone={onDone} />
          ))}
        </div>
      </section>
    </>
  );
}
