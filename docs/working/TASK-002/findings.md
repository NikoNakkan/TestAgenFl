# Findings — TASK-002 (navigator)

## Index queries

| Query | Result |
|-------|--------|
| `find_symbol BaseButton` | no hits |
| `find_symbol useToggleState` | no hits |
| `context_pack "button toggle state"` | no hits |

## Reuse

| Asset | Action |
|-------|--------|
| `apps/api/src/main.py` | **Extend** — register new router |
| `apps/web-react/src/App.tsx` | **Extend** — demo BaseButton |
| `packages/contract/openapi.yaml` | **Extend** — new paths |
| `fetchInfo` / health routes | **Keep** — unchanged |

## Create

| Path | Purpose |
|------|---------|
| `apps/api/src/db.py` | SQLite connection helper |
| `apps/api/src/services/toggle_state.py` | read/write boolean |
| `apps/api/src/routes/toggle_state.py` | GET/PUT endpoints |
| `apps/web-react/src/components/BaseButton/BaseButton.tsx` | foundation button |
| `apps/web-react/src/components/BaseButton/BaseButton.css` | styling |
| `apps/web-react/src/hooks/useToggleState.ts` | FE state + API sync |
| `apps/web-react/src/api/toggleState.ts` | API client |
