# Testing rules

## Placement (colocated)

**Every test file lives in the same directory as the source it covers** — component folder, hook file, API client, route module, or service module. No separate test trees for symbol-level tests.

| Source | Test file (same folder) |
|--------|------------------------|
| `components/Foo/Foo.tsx` | `components/Foo/Foo.test.tsx` |
| `hooks/useBar.ts` | `hooks/useBar.test.ts` |
| `api/toggleState.ts` | `api/toggleState.test.ts` |
| `App.tsx` | `App.test.tsx` |
| `routes/toggle_state.py` | `routes/test_toggle_state.py` |
| `services/toggle_state.py` | `services/test_toggle_state.py` |

**Do not** use `__tests__/`, repo-root `tests/` mirrors, or other distant folders for per-symbol tests. Agents and index sync assume colocation.

**Exception:** shared setup only (e.g. `test-setup.ts`, pytest `conftest.py`) may live at app test config paths — not substitutes for symbol tests.

## Naming

- `Foo.tsx` → `Foo.test.tsx` (or `.spec.tsx`)
- `useBar.ts` → `useBar.test.ts`
- `toggle_state.py` → `test_toggle_state.py`

## Required

- Every exported symbol → colocated test file linked in index (`symbols.tests`)
- Run index build + sync after adding tests

## Regression from debugger

When `docs/working/<TASK-ID>/test-gap.md` exists:

1. **fe-debugger** / **be-debugger** writes test-gap (why tests missed the bug + tests to add)
2. **fe-testing-agent** / **be-testing-agent** implements **every** listed test — may extend existing test files
3. Fix is not done until test-gap tests pass

Template: [`test-gap.template.md`](../working/test-gap.template.md)

## Commands (add to project `scripts/validate.sh`)

- FE: `npm test` or `npx vitest run`
- BE: `pytest` from app root (discovers colocated `test_*.py`)
