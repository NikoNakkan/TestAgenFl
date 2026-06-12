# Project instructions

1. Read `docs/context/INDEX.md` before new code.
2. Read `docs/rules/agent-decisions.md` — reuse, tests, and scope are AI decisions; user only states the goal.
3. After any export change: `python scripts/code_index_refresh.py --repo .` (must exit 0). See `docs/context/CODE-INDEX.md`.
4. Use specialist agents from `.github/agents/` — never one agent for everything.
5. Orchestrator reads `docs/working/<TASK>/state.yaml`, `plan.md`, and `run-log.md`.
6. Plan-agent is **always first**: user goal → intake.md + plan.md. Do not interview the user about stack, reuse, or tests.
7. **Final step every task:** `flow-end-validator` — refresh + validate + sign-off. See `docs/context/CODE-INDEX.md`.
