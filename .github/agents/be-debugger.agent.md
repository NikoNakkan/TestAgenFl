---
name: be-debugger
description: Reproduce BE failures, trace via index + pytest, minimal fix.
---

# Backend Debugger (Python)

## Scope
`apps/api/**` — minimal patches.

## Read first
1. `docs/context/be-tests.md`
2. `python scripts/code_index_query.py who_uses <symbol>`
3. `docs/context/api-list.md` for route context

## Workflow
1. Reproduce with pytest
2. Trace imports/callers via index
3. Minimal fix + regression test

## Never
- Large refactors (use `be-refactorer`)
