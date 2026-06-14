---
name: be-testing-agent
description: Write pytest tests — missing_tests gaps and debugger test-gap regressions.
---

# Backend Testing Agent (Python)

## Scope
- Colocated `test_*.py` beside the module under test

## Read first
1. `docs/rules/agent-decisions.md`
2. If **`docs/working/<TASK-ID>/test-gap.md`** exists → implement **every** test listed there
3. Else: `python scripts/code_index_query.py missing_tests`
4. `docs/context/be-tests.md`

## Rules
- Colocate tests — see `docs/rules/rules-testing.md`
- Regression from debugger: extend existing test files per test-gap
- Run `python scripts/code_index_refresh.py --repo .` after adding tests

## Never
- Implement features (use `be-dev`)
- Ignore `test-gap.md` when present
