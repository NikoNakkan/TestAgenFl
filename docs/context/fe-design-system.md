# Frontend design system

**Human-maintained.** Paths, theme tokens, and component tiers.  
Read this **before** styling or adding UI. Auto-sync does not edit this file.

## Paths (relative to repo root)

| Asset | Path | Notes |
|-------|------|-------|
| Theme tokens | `apps/web-react/src/styles/theme.css` | **Only file** with raw color literals — see [rules-theming.md](../rules/rules-theming.md) |
| Global styles | `apps/web-react/src/styles/index.css` | Resets, shared layout — `var(--*)` only |
| i18n locales | `apps/web-react/src/i18n/locales/` | `en.json`, `el.json`, … — see [fe-i18n.md](fe-i18n.md) |
| App shell styles | `apps/web-react/src/App.css` | Page layout, flow background — `var(--*)` only |
| Base components | `apps/web-react/src/components/Base*/` | Folders named `Base<Name>/` |
| Extending components | `apps/web-react/src/components/<Name>/` | Must declare `extends_base` below |

**Lookup order:** theme tokens → i18n keys → **base components** → extending components → page (`App.tsx`).

### Theme token sections (in `theme.css`)

| Section | Examples |
|---------|----------|
| Palette | `--palette-slate-700`, `--palette-emerald-500` |
| Semantic | `--color-text-primary`, `--color-error`, `--color-flow-active-dot` |
| Spacing | `--space-1` … `--space-8` |
| Typography | `--font-family-sans`, `--font-size-md` |
| Elevation | `--radius-md`, `--shadow-button`, `--gradient-flow-active` |

---

## Base components

Foundation primitives. **Required before** any extending component that builds on the same primitive.

| name | path | purpose |
|------|------|---------|
| BaseButton | `apps/web-react/src/components/BaseButton/` | Foundation true/false control — all toggles/buttons start here |
| FlowDialog | `apps/web-react/src/components/FlowDialog/` | Foundation status dialog shell (flow on/off surface) |

Naming: exported component `Base<Name>` in `components/Base<Name>/Base<Name>.tsx`.

---

## Extending components

| name | path | extends_base | purpose |
|------|------|--------------|---------|
| TimeDialog | `apps/web-react/src/components/TimeDialog/` | FlowDialog | Nested time panel inside FlowDialog; live clock + save button |

**Rule:** every row **must** have `extends_base` set to an existing **base** component name.

---

## Flow palette (semantic tokens)

| Token | Active (flow on) | Idle (flow off) |
|-------|------------------|-----------------|
| `--gradient-flow-active` / `--gradient-flow-idle` | App shell background | App shell background |
| `--color-flow-active-*` / `--color-flow-idle-*` | FlowDialog surface | FlowDialog surface |

---

## Adding UI (checklist)

1. Colors/spacing → semantic tokens in `theme.css`; component CSS uses `var(--*)` only
2. User-facing text → `locales/*.json` + row in `fe-i18n.md` — no string literals in JSX
3. Check **base components** — reuse or extend before inventing a parallel control
4. New **extending** row → `extends_base` must already appear in the base table
5. Update this file when adding base or extending components (human `purpose` column)
