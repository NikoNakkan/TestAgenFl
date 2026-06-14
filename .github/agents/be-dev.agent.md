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
- Run `python scripts/code_index_refresh.py --repo .`

## Handoff to be-testing-agent

**Required** when you added or changed exports.

1. Write `docs/working/<TASK-ID>/be-test-handoff.md` from [`be-test-handoff.template.md`](../../docs/working/be-test-handoff.template.md) — files changed, exports, testable behaviors, suggested test files.
2. Run `python scripts/code_index_refresh.py --repo .`.
3. Stop. Tell the human: *"Step complete — return to **orchestrator** for review before `be-testing-agent`."*

Do **not** add pytest coverage — that is `be-testing-agent`.

## Never
- Touch `apps/web-react/**` or OpenAPI without `be-api-contract`
