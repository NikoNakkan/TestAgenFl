# Plan — TASK-001

> Written by **plan-agent** from user goal + [agent-decisions.md](../rules/agent-decisions.md).  
> **User must review this entire file** and reply **proceed** or **revise** before orchestrator runs step 1.

## Why this file exists

Single document for **why** (decisions) and **what** (agent steps). Replaces the old split between `intake.md` and `plan.md`. Orchestrator executes the **Steps** table row by row after user approval.

**See also:** [ARTIFACTS.md](ARTIFACTS.md#planmd)

---

## User goal (verbatim)

> <!-- Paste exactly what the user said -->

## What we found

<!-- plan-agent recon: index hits, existing symbols, gaps — 2–5 bullets -->

## Spec clarifications

<!-- User answers to 0–3 questions (product/UX/tech when ambiguous). "None" if clear. -->

## AI decisions

> Derived from `agent-decisions.md`, context MDs, and index queries.

| Decision | Value | Basis |
|----------|-------|-------|
| Stack | | repo layout + defaults |
| In scope | | inferred from goal |
| Out of scope | | agent-decisions defaults |
| API surfaces | | goal + `api-list.md` / index |
| UI surfaces | | goal + context MDs / index |
| Data / env | | defaults or `envs.md` |
| Reuse strategy | | `find_symbol` / `context_pack` |
| Test strategy | | `missing_tests` + rules-testing |

## Proposed tech & scope (user reviews)

> User reviews proposals below — reply **revise** with changes before **proceed**.

| Topic | Proposal | User notes |
|-------|----------|------------|
| Persistence | | e.g. SQLite / in-memory |
| New API endpoints | | paths + methods |
| New UI components | | names + reuse |
| Other | | |

## User plan review

| Field | Value |
|-------|-------|
| **Status** | `pending` \| `approved` \| `revision_requested` |
| **Reviewed at** | |
| **User notes** | |

Orchestrator sets **approved** after user replies **proceed** on the plan checkpoint. Do not start step 1 while **pending** or **revision_requested**.

---

## Acceptance

- [ ] ...
- [ ] ...

## Steps

| # | agent | task | context_files | scope | done_when |
|---|-------|------|---------------|-------|-----------|
| 1 | navigator | Query index + context; write reuse/create findings | INDEX.md | read-only | findings.md written |
| 2 | be-api-contract | Define API contract (if new surfaces) | api-list.md, types.md | packages/contract/** | contract file exists |
| 3 | be-dev | Implement routes + service | api-list.md, envs.md | apps/api/** | routes respond |
| 4 | be-testing-agent | Tests for `missing_tests` in BE scope | be-tests.md, test-writing.md | apps/api/tests/** | no missing_tests in scope; pytest pass |
| 4b | fe-design-navigator | Design findings — tokens, i18n, base/extending | fe-design-system.md, fe-i18n.md | read-only | findings.md has **Design findings** |
| 5 | fe-dev | UI + hooks per goal | findings.md, fe-components.md, fe-i18n.md | apps/web-react/** | UI meets acceptance |
| 6 | fe-testing-agent | Tests for `missing_tests` in FE scope | fe-tests.md, test-writing.md | apps/web-react/** | vitest pass; no FE missing_tests |
| 7 | flow-end-validator | Refresh index + validate + sign off | CODE-INDEX.md | scripts/**, docs/context/** | `code_index_refresh.py` exit 0 |

> Omit rows per [agent-decisions.md](../rules/agent-decisions.md) (API-only → skip FE; UI-only → skip BE).

**Human checkpoints:** orchestrator pauses after every step. User **proceed** / **revise** / **stop**. First checkpoint = **this plan file**.

**Full-stack testing:** `be-dev` → `be-test-handoff.md` → `be-testing-agent` → `fe-dev` → `fe-test-handoff.md` → `fe-testing-agent`.

## Bug-fix variant (fix / bug / broken)

| # | agent | task | context_files | scope | done_when |
|---|-------|------|---------------|-------|-----------|
| 1 | navigator | findings | INDEX.md | read-only | findings.md |
| 2 | fe-debugger or be-debugger | reproduce, test-gap.md, minimal fix | fe-tests.md or be-tests.md | apps/** | test-gap.md written; fix applied |
| 3 | fe-testing-agent or be-testing-agent | regression tests from test-gap | test-writing.md | apps/** | all test-gap tests pass |
| 4 | flow-end-validator | refresh + validate | CODE-INDEX.md | scripts/** | exit 0 |

## Notes

<!-- reuse hits, skipped steps rationale -->
