# Project instructions

1. Read `docs/context/INDEX.md` before new code.
2. Read `docs/rules/agent-decisions.md` — reuse, tests, and scope are AI decisions; user only states the goal.
3. After any export change: `python scripts/code_index_refresh.py --repo .` (must exit 0). See `docs/context/CODE-INDEX.md`.
4. UI work: follow `docs/rules/rules-theming.md` (tokens in `theme.css` only) and `docs/rules/rules-i18n.md` (react-i18next, no string literals).
5. Tests: `docs/context/test-writing.md` — colocated Vitest/pytest; testing agents own test creation.
6. Use specialist agents from `.github/agents/` — never one agent for everything.
7. Orchestrator reads `docs/working/<TASK>/state.yaml`, `plan.md`, `run-log.md`, and `test-gap.md` (bug-fix tasks).
8. Plan-agent is **always first**: user goal → intake.md + plan.md. Do not interview the user about stack, reuse, or tests.
9. **Final step every task:** `flow-end-validator` — refresh + validate + sign-off. See `docs/context/CODE-INDEX.md`.
10. Bug-fix tasks: debugger writes `test-gap.md`; testing agent implements every listed regression test.
