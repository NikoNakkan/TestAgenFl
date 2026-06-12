# Plan — TASK-002

## Goal

Add `BaseButton` — a styled true/false toggle button — as the app's foundation component, persisting state to SQLite via REST API.

## Acceptance

- [ ] BaseButton renders true/false with polished styling
- [ ] Click toggles and persists to DB
- [ ] API contract updated; tests green; index clean

## Steps

| # | agent | task | context_files | scope | done_when |
|---|-------|------|---------------|-------|-----------|
| 1 | navigator | Query index; list reuse vs create | INDEX.md, fe-components.md, api-list.md | read-only | findings.md + run-log step 1 |
| 2 | be-api-contract | OpenAPI for toggle-state endpoints | api-list.md, types.md | packages/contract/** | openapi paths added |
| 3 | be-dev | SQLite + service + routes | api-list.md, envs.md | apps/api/** | GET/PUT work |
| 4 | be-testing-agent | pytest for toggle routes + service | be-tests.md | apps/api/tests/** | pytest pass; no BE missing_tests |
| 5 | fe-dev | BaseButton + useToggleState + App wire-up | fe-components.md, fe-utils.md, fe-services.md | apps/web-react/** | toggle persists on refresh |
| 6 | fe-testing-agent | vitest for BaseButton, hook, client | fe-tests.md | apps/web-react/** | vitest pass; no FE missing_tests |
| 7 | index-curator | build + sync | — | scripts/** | graph.db updated; run-log complete |
