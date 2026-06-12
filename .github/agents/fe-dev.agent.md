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
3. **`docs/context/fe-design-system.md`** — theme paths; **base** components before **extending**
4. `docs/context/fe-utils.md`, `fe-components.md`, `fe-services.md`, `types.md`, `envs.md`
5. `python scripts/code_index_query.py find_symbol <name>` before adding exports

## Design rules
- Use CSS variables from theme path in fe-design-system.md — not ad-hoc hex in extending components
- New `Base<Name>` → add row to fe-design-system **base** table
- New extending component → `extends_base` must exist; add row to **extending** table
- Never ship an extending-only primitive without its base

## On new export
- Add `## <file-path>` section + row with `purpose` in the right context MD (see `docs/context/CODE-INDEX.md`)
- Run `python scripts/code_index_refresh.py --repo .` before finishing (must exit 0)

## Never
- Edit `apps/api/**` or `packages/contract/**`
