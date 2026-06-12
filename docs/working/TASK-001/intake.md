# Intake — TASK-001

> Filled by **plan-agent** from user goal + [agent-decisions.md](../../rules/agent-decisions.md).

## User goal (verbatim)

> Make an empty react project with 2 apis in the backend and then we'll see what we do, we need to use the agentic flow for everything tho.

## AI decisions

| Decision | Value | Basis |
|----------|-------|-------|
| Stack | React (`apps/web-react`) + FastAPI (`apps/api`) | repo layout + defaults |
| In scope | Minimal Vite React shell; 2 read-only GET endpoints; OpenAPI contract; index + context rows | goal |
| Out of scope | Todo feature, DB, auth, deploy, extra endpoints | agent-decisions defaults |
| API surfaces | `GET /health`, `GET /api/info` | minimal PoC pair (liveness + metadata) |
| UI surfaces | Single `App` page showing API info from backend | empty shell that proves FE↔BE |
| Data / env | In-memory; `VITE_API_URL` default `http://localhost:8000` | defaults + `envs.md` |
| Reuse strategy | Greenfield — navigator confirms empty `apps/` | no index yet |
| Test strategy | `missing_tests` after implementation; pytest + vitest for new exports | rules-testing |
| Acceptance | See below | derived |

## Acceptance (derived — for plan.md)

- [ ] React app runs (`npm run dev`) and renders a page
- [ ] `GET /health` returns 200 with status payload
- [ ] `GET /api/info` returns app name/version JSON
- [ ] OpenAPI stub exists in `packages/contract/`
- [ ] Code index built; context MDs have purpose rows for new exports
