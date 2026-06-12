# Intake — TASK-001

> Filled by **plan-agent**. User provides the goal only; all other fields are **AI decisions** ([agent-decisions.md](../rules/agent-decisions.md)).

## User goal (verbatim)

> <!-- Paste exactly what the user said, e.g. "Build a todo list with API and React page" -->

## AI decisions

> Do not ask the user to fill this table. Derive from `agent-decisions.md`, context MDs, and index queries.

| Decision | Value | Basis |
|----------|-------|-------|
| Stack | | repo layout + defaults |
| In scope | | inferred from goal |
| Out of scope | | agent-decisions defaults |
| API surfaces | | goal + existing `api-list.md` / index |
| UI surfaces | | goal + existing context MDs / index |
| Data / env | | defaults or existing `envs.md` |
| Reuse strategy | | `find_symbol` / `context_pack` / findings |
| Test strategy | | `missing_tests` + rules-testing |
| Acceptance | | derived checkboxes |

## Acceptance (derived — for plan.md)

- [ ]
- [ ]
