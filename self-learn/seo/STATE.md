# Estado SEO orgánico (actualizar tras cambios grandes)

- **Host canónico:** `https://www.gonzalopedrosa.cl`
- **Inventario / sitemap:** 79 URLs (`organic-routes.ts`)
- **seo:audit:** PASS (2026-08-04, prod)
- **Última tanda código:** 2026-08-23 → [CHANGELOG.md](./CHANGELOG.md) · mapa [OPORTUNIDADES.md](./OPORTUNIDADES.md) · eval [EVAL.md](./EVAL.md)
- **Último GSC:** 2026-08-23 → `docs/gsc-informe-2026-08-23.md` (90d)
- **GSC property:** `sc-domain:gonzalopedrosa.cl`

## Snapshot GSC 2026-08-23 (90d: 23 may → 20 ago)

| Métrica | 90d previos | 90d actuales | Δ |
|---|---:|---:|---:|
| Clics | 27 | **28** | +1 |
| Impresiones | 310 | **406** | +96 |
| CTR | 8,7% | **6,9%** | −1,8 pp |
| Posición media | 5,8 | **10,7** | peor (más cola) |

Top páginas 90d: pareja 97 imp / 3 clics · online 47 / 0 · EMDR 42 / 5 · home 40 / 6 · obesidad 35 / **6**.  
Oportunidades **aplicadas 23 ago** (P0+P1 on-page): [OPORTUNIDADES.md](./OPORTUNIDADES.md). No crear ciudades. No recrear `/psicologo-hombres-chillan`.

## Snapshot GSC 2026-08-04 (28d: 7 jul → 4 ago)

| Métrica | 23 jul | 28 jul | 4 ago | Δ vs 28 jul |
|---|---:|---:|---:|---:|
| Clics | 11 | 11 | **9** | −2 |
| Impresiones | 103 | 126 | **136** | +10 |
| CTR | 10,68% | 8,73% | **6,62%** | −2,1 pp |
| Posición media | 10,3 | 11,8 | **12,4** | −0,6 (empeora)

### Top páginas (clics)

| Página | Clics | Imp | Pos |
|---|---:|---:|---:|
| `/tratamiento-toc-chillan` | 3 | 14 | 4,6 |
| `/` | 2 | 15 | 1,5 |
| `/terapia-de-pareja-chillan` | 1 | 21 | 8,7 |
| `/terapia-emdr-chillan` | 1 | 16 | 11,4 |
| `/psicologo-obesidad-chillan` | 1 | 15 | 10,1 |
| abuso sexual · agendar · perfil | 1 c/u | var. | — |

### Oportunidad CTR (0 clics, con impresiones) — A3

| URL | Imp 28 jul | Imp 4 ago | Pos | CTR |
|---|---:|---:|---:|---|
| `/psicologo-online-chillan` | 18 | **18** | **41,6** ↓ | 0% |
| `/psicologo-ansiedad-chillan` | 12 | 12 | 7,8 | 0% |
| `/psicologo-adulto-chillan` | 9 | **12** | 6,8 | 0% |
| alcoholismo / dejar-de-beber | 7+6 | 6+4 | ~6–10 | 0% |
| `/terapia-de-pareja-chillan` | 16 | **21** | 8,7 | **4,8%** ✅ |

### Técnico

| Señal | Estado |
|---|---|
| Soft duplicate especialista-ansiedad | ✅ 308/301 en prod |
| seo:audit | ✅ PASS 79 URLs (4 ago) |
| Sitemap last downloaded | ✅ **2026-07-28** (reenviado) |
| Sitemap API «0 indexadas / 79» | ⚠️ ruido API; TOC PASS indexada |
| Hosts en impresiones | solo `www` |
| Ads noindex | OK |

## Pendiente (prioridad)

1. ~~Deploy + 301 especialista~~ · ~~reenviar sitemap~~ (vivo)
2. **A1 manual:** URL Inspection money pages (online, ansiedad, adulto) — online pos. empeoró a ~42
3. **Cierre EVAL formal** + medir CTR post-metas 23 ago (~2–4 sem)
4. ~~CTR on-page ansiedad/adulto/online/pareja~~ (aplicado 23 ago; falta impacto GSC)
5. B3 Rich Results · B4 QA tsc/lint
6. C1 GBP / reseñas / citaciones
7. No crear landings nuevas hasta saturación money pages
