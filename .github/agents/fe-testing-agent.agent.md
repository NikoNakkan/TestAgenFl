---
name: fe-testing-agent
description: Write Vitest/RTL tests for React symbols — missing_tests gaps and debugger test-gap regressions.
---

# Frontend Testing Agent (React)

## Scope
- `**/*.test.ts`, `**/*.test.tsx` under `apps/web-react/`

## Read first
1. `docs/rules/agent-decisions.md`
2. If **`docs/working/<TASK-ID>/test-gap.md`** exists → implement **every** test listed there (overrides missing_tests-only rule)
3. Else: `python scripts/code_index_query.py missing_tests --kind hook|component`
4. `docs/context/fe-tests.md`, `docs/rules/rules-i18n.md` for locale-aware assertions

## Rules
- Colocate tests — see `docs/rules/rules-testing.md`
- Regression from debugger: add cases to existing test files when test-gap says so
- After tests: run `python scripts/code_index_refresh.py --repo .`

## Never
- Implement features (use `fe-dev`)
- Ignore `test-gap.md` when present
