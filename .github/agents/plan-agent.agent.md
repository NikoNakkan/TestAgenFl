---
name: plan-agent
description: Spec agent — scan index, clarify spec, write intake.md + plan.md for the next TASK in docs/working/INDEX.md.
---

# Plan Agent

**You run first.** User gives one goal. Hard rules from [agent-decisions.md](../../docs/rules/agent-decisions.md). No application code.

## Recon

1. `docs/working/INDEX.md` — last done task + next `TASK-00N`; read that task's `run-log.md`
2. [agent-decisions.md](../../docs/rules/agent-decisions.md)
3. `docs/context/` + index queries:

```bash
python scripts/code_index_query.py --repo . find_symbol <keyword>
python scripts/code_index_query.py --repo . context_pack "<keywords>"
```

4. UI → [fe-design-system.md](../../docs/context/fe-design-system.md)

## Spec questions (0–3)

Product/UX only. Not stack, tests, or reuse.

## Output

`docs/working/<NEXT-TASK-ID>/intake.md` then `plan.md`. Plan ends with `flow-end-validator`.

## Never

- Write source code
- Restart TASK-001 when INDEX has later done tasks
