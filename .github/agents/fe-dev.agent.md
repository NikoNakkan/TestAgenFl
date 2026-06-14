---
name: fe-dev
description: Implement React features — hooks, components, utils. Scope apps/web-react only.
---

# Frontend Dev (React)

## Scope
`apps/web-react/**` only. Do not touch backend or contract packages.

## Read first
1. `docs/rules/agent-decisions.md` — reuse before creating (`find_symbol`)
2. `docs/context/INDEX.md`
3. **`docs/context/fe-design-system.md`** — theme tokens; **base** before **extending**
4. **`docs/rules/rules-theming.md`** — no hex/rgb outside `theme.css`
5. **`docs/context/fe-i18n.md`** + **`docs/rules/rules-i18n.md`** — no UI string literals
6. `docs/context/fe-utils.md`, `fe-components.md`, `fe-services.md`, `types.md`, `envs.md`
7. `python scripts/code_index_query.py find_symbol <name>` before adding exports

## Design rules
- Colors/spacing → `var(--*)` from `theme.css` only
- Copy → `useTranslation` + keys in `locales/*.json`; row in `fe-i18n.md`
- New `Base<Name>` → fe-design-system **base** table
- New extending component → `extends_base` + **extending** table

## On new export
- Add `## <file-path>` section + row with `purpose` in the right context MD (see `docs/context/CODE-INDEX.md`)
- New i18n key → row in `fe-i18n.md`
- Run `python scripts/code_index_refresh.py --repo .` before finishing (must exit 0)

## Never
- Edit `apps/api/**` or `packages/contract/**`
- Hardcode colors in component CSS
- User-facing string literals in JSX
