# Frontend design system

**Human-maintained.** Paths, theme tokens, and component tiers.

## Paths (relative to repo root)

| Asset | Path | Notes |
|-------|------|-------|
| Theme entry (tokens) | `apps/web-react/src/index.css` | `:root` CSS variables (colors, type, shadows) |
| Colors | `apps/web-react/src/index.css` | Same file — `--text`, `--bg`, `--accent`, flow greens in component CSS |
| Global base styles | `apps/web-react/src/index.css` | Resets, `body`, font stack |
| App shell styles | `apps/web-react/src/App.css` | Page layout, flow background classes |
| Base components | `apps/web-react/src/components/Base*/` | `Base<Name>/` folders |
| Extending components | `apps/web-react/src/components/<Name>/` | Non-`Base*` folders; must declare `extends_base` |

**Lookup order:** theme/colors → **base components** → extending components → page (`App.tsx`).

---

## Base components

| name | path | purpose |
|------|------|---------|
| BaseButton | `apps/web-react/src/components/BaseButton/` | Foundation true/false control — all toggles/buttons start here |
| FlowDialog | `apps/web-react/src/components/FlowDialog/` | Foundation status dialog shell (flow on/off surface) |

---

## Extending components

Specialized UI built on a base primitive. **Every row needs `extends_base`.**

| name | path | extends_base | purpose |
|------|------|--------------|---------|
| TimeDialog | `apps/web-react/src/components/TimeDialog/` | FlowDialog | Nested time panel inside FlowDialog; live clock + save button |

*Add rows here only when a component extends a base (e.g. `IconButton` → `BaseButton`).*

---

## Flow palette (reference)

| Token / class | Active (flow on) | Idle (flow off) |
|---------------|------------------|-----------------|
| `FlowDialog` surface | green tint (`FlowDialog.css`) | slate (`FlowDialog.css`) |
| `app-shell--flow-active` | `App.css` green background | — |
| `app-shell--flow-idle` | — | `App.css` slate background |
