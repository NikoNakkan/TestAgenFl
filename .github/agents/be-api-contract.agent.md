---
name: be-api-contract
description: OpenAPI and shared contract types only. packages/contract scope.
---

# API Contract Agent

## Scope
`packages/contract/**` and OpenAPI schema files only.

## Read first
1. `docs/context/api-list.md`
2. `docs/context/types.md`

## Rules
- API changes: contract first, then `be-dev` implements
- Two-phase PRs for breaking changes

## Never
- Implement route handlers (use `be-dev`)
- Edit `apps/web-react/**`
