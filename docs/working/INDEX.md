# Working tasks

| Task | Goal | Status | Run log |
|------|------|--------|---------|
| [TASK-001](TASK-001/run-log.md) | Empty React + 2 APIs | done | [run-log](TASK-001/run-log.md) |
| [TASK-002](TASK-002/run-log.md) | BaseButton + SQLite toggle | done | [run-log](TASK-002/run-log.md) |
| [TASK-003](TASK-003/run-log.md) | FlowDialog + flow background | done | [run-log](TASK-003/run-log.md) |

---

## Task artifacts (per `docs/working/<TASK-ID>/`)

**Full guide:** [ARTIFACTS.md](ARTIFACTS.md)

| File | Writer | Reader | Why (one line) |
|------|--------|--------|----------------|
| `plan.md` | plan-agent | you, orchestrator | Goal + decisions + tech proposals + steps — **user approves before step 1** |
| `state.yaml` | orchestrator | orchestrator | Machine save-state |
| `run-log.md` | orchestrator | you, plan-agent | Human audit trail |
| `findings.md` | navigator, fe-design-navigator | fe-dev, you | Reuse/create + design findings |
| `be-test-handoff.md` | be-dev | be-testing-agent | BE test brief |
| `fe-test-handoff.md` | fe-dev | fe-testing-agent | FE test brief |
| `test-gap.md` | debugger | testing agent | Bug-fix regressions |

> **Legacy:** old tasks may still have `intake.md` — merged into `plan.md` for new tasks.

Templates: [`plan.template.md`](plan.template.md) · [`state.template.yaml`](state.template.yaml) · [`run-log.template.md`](run-log.template.md) · [`findings.template.md`](findings.template.md) · [`be-test-handoff.template.md`](be-test-handoff.template.md) · [`fe-test-handoff.template.md`](fe-test-handoff.template.md) · [`test-gap.template.md`](test-gap.template.md)

Testing workflow: [`test-writing.md`](../context/test-writing.md)
