# Comandos

Auth / lectura / escritura. Sin `--apply` = dry-run o validate_only.

```bash
npm run google-ads:auth
npm run google-ads:list-accounts
npm run google-ads:informe          # → docs/google-ads-informe-ads-<fecha>.md
npm run google-ads:manage -- list

# Presupuesto / status / puja / CPA
npm run google-ads:manage -- budget --amount=5 --apply
npm run google-ads:manage -- status --entity=ad_group --resource=... --paused --apply
npm run google-ads:manage -- bid --entity=ad_group --resource=... --amount=1.50 --apply
npm run google-ads:manage -- target-cpa --resource=... --amount=15 --apply

# Negativas
npm run google-ads:negatives -- propose
npm run google-ads:negatives -- apply --dry-run --terms="a,b,c"
npm run google-ads:negatives -- apply --apply --terms="a,b,c"

# Landings RSA (final_urls inmutables → create + pause)
npm run google-ads:align-landings
npm run google-ads:align-landings -- --apply

# Campaña adicción al juego (crear pausada; ya aplicada 23 ago)
npm run google-ads:create-adiccion-juego
npm run google-ads:create-adiccion-juego -- --apply

# Geo Chile PRESENCE + negativas hotline (juego; ya aplicada 25 ago)
node --env-file=.env.local scripts/google-ads-juego-chile-presence.mjs
node --env-file=.env.local scripts/google-ads-juego-chile-presence.mjs --apply

# Campaña evaluación bariátrica (crear pausada; dry-run por defecto)
npm run google-ads:create-evaluacion-bariatrica
npm run google-ads:create-evaluacion-bariatrica -- --apply

# Reactivar + horario lun–vie (sin sáb/dom)
node --env-file=.env.local scripts/google-ads-weekday-enable.mjs
node --env-file=.env.local scripts/google-ads-weekday-enable.mjs --apply
```

Panel web: `/interno/ads` · gestión: `/interno/ads/manage?key=…`

Scripts: `scripts/google-ads-*.mjs` · lib: `src/lib/google-ads*.ts`
