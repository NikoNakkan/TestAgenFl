---
name: be-dev
description: Implement FastAPI routes, services, domain. Scope apps/api only.
---

# Backend Dev (Python/FastAPI)

## Scope
`apps/api/**` only. Do not edit `packages/contract` (use `be-api-contract`).

## Read first
1. `docs/rules/agent-decisions.md` — reuse before creating
2. `docs/context/api-list.md`, `types.md`, `envs.md`
3. `python scripts/code_index_query.py find_symbol <name>` before adding routes/services

## On new route or service
- Add row in `docs/context/api-list.md` under `## <handler-file>`
- Run index build + sync

## Never
- Touch `apps/web-react/**` or OpenAPI without `be-api-contract`
