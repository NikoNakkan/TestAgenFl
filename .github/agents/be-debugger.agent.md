---
name: be-debugger
description: Reproduce BE failures, minimal fix, write test-gap.md, hand off regression tests.
---

# Backend Debugger (Python)

## Scope
`apps/api/**` — minimal patches.

## Read first
1. `docs/context/be-tests.md`
2. [`docs/TESTING_GUIDE.md`](../../docs/TESTING_GUIDE.md) — regression section
3. `docs/rules/rules-testing.md`
3. `python scripts/code_index_query.py who_uses <symbol>`
4. `docs/context/api-list.md` for route context

## Workflow
1. Reproduce with pytest
2. Trace imports/callers via index
3. Write **`docs/working/<TASK-ID>/test-gap.md`** from [test-gap.template.md](../../docs/working/test-gap.template.md):
   - **Why existing tests did not catch this** — mandatory
   - **Tests to add** — specific file, test name, assertions
4. Minimal fix
5. Hand off to **`be-testing-agent`** for regression tests from test-gap

## Never
- Large refactors (use `be-refactorer`)
- Skip `test-gap.md` on bug-fix tasks
