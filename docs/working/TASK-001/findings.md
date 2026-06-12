# Findings — TASK-001 (navigator)

## Index queries

- No `.code-index/graph.db` yet (expected greenfield).
- `apps/web-react/` and `apps/api/` directories exist but contain no source files.

## Context MDs

- All `docs/context/*.md` are toolkit templates with no app-specific rows.

## Reuse vs create

| Area | Action |
|------|--------|
| Backend routes | **Create** `apps/api/src/main.py`, `apps/api/src/routes/health.py`, `apps/api/src/routes/info.py` |
| Contract | **Create** `packages/contract/openapi.yaml` |
| Frontend | **Create** Vite React app under `apps/web-react/` |
| API client | **Create** `apps/web-react/src/api/info.ts` |
| UI | **Create** minimal `App.tsx` |

## Risks

- None; standard PoC scaffold.
