# Agent decisions (hard rules — plan-agent does not ask the user)

> **Audience:** plan-agent, orchestrator, and all specialists.  
> **User says one thing:** e.g. *"Build a todo list"* or *"Add DELETE /todos/:id"*.  
> **Hard rules** below are **your** decisions from this file, index, and context.

## User input vs spec clarifications

| Layer | Who | What |
|-------|-----|------|
| **Goal** | User | One task in plain language |
| **Spec clarifications** | Plan-agent asks user | 1–3 product/UX questions after stating what was found — only when unclear whether/how to implement |
| **Hard rules** | AI only | Stack, reuse, tests, acceptance, index sync, agent routing |

### Plan-agent as spec agent

Before planning, plan-agent **scans** index + context, then messages the user like:

> *I found BaseButton and toggle-state API. Unclear: should emoji be on App or inside BaseButton?*

**Ask:** implement or not, behavior, visible UX, data meaning, extend vs replace.  
**Do not ask:** React vs Angular, pytest vs vitest, run index-curator, reuse policy, test policy.  
**Max 3 questions** per task. If clear → ask nothing, write plan.

---

## Defaults (when goal does not say otherwise)

| Topic | Default | Source |
|-------|---------|--------|
| Frontend | React in `apps/web-react/` | Repo layout |
| Backend | FastAPI in `apps/api/` | Repo layout |
| Contract | OpenAPI in `packages/contract/` | Repo layout |
| Persistence | In-memory / mock service | PoC; no DB unless goal says "database" |
| Auth | Out of scope | Unless goal mentions login/auth |
| Tests | Per `rules-testing.md` | Index-driven gaps only |
| Reuse | Always prefer existing symbols | Index + context MDs |

---

## Design system (UI tasks — not user Q&A)

When the goal touches UI, styling, components, or layout:

1. Run **`fe-design-navigator`** (with or right after `navigator`)
2. Read `docs/context/fe-design-system.md` — theme paths, **base** table, then **extending** table
3. **No extending component without a registered base** — plan must create base first if missing

---

## Reuse (navigator + index — not user Q&A)

**Always** run `navigator` as plan step 1.

Before creating any file or export:

```bash
python scripts/code_index_query.py --repo . find_symbol <name>
python scripts/code_index_query.py --repo . who_uses <name>
python scripts/code_index_query.py --repo . context_pack "<keywords from goal>"
```

Read matching sections in `docs/context/`.

| Index / context signal | Action |
|------------------------|--------|
| `find_symbol` hit + row in context MD | **Extend** — read `purpose`, do not duplicate |
| `who_uses` shows callers | **Preserve** public shape; refactor agent if rename needed |
| No hits, empty repo | **Create new** — record in `findings.md` |
| Partial overlap | **Reuse** util/hook/service; add only missing pieces |

Write `docs/working/<TASK-ID>/findings.md` with: what exists, what to reuse, what to create.

---

## Tests (index-driven — not user Q&A)

Policy: every **exported** symbol should have a test file (`rules-testing.md`).

**Who writes tests:** `be-testing-agent` / `fe-testing-agent` — not feature dev agents.

**When to include a testing step in the plan:**

```bash
python scripts/code_index_query.py --repo . missing_tests
```

| Situation | Plan step |
|-----------|-----------|
| New exports expected (greenfield feature) | Include testing agent after implementation |
| Only editing existing covered symbols | Include testing agent with `done_when: no new missing_tests in scope` |
| `missing_tests` already empty for scope | Step may complete immediately — run query, mark done |

Testing agents **only** add tests for symbols with empty `symbols.tests` / `missing_tests` output. Never duplicate existing test files.

---

## Scope inference from goal

| Goal signals | In scope | Out of scope |
|--------------|----------|--------------|
| "API", "endpoint", "route" | BE + contract if new surface | FE unless also mentioned |
| "page", "UI", "component", "screen" | FE | BE unless also mentioned |
| "full", "end-to-end", feature name without layer | FE + BE + contract | Deploy, CI, auth |
| "fix", "bug", "broken" | `fe-debugger` or `be-debugger` | New features |
| "rename", "extract", "move" | `fe-refactorer` or `be-refactorer` | Behavior change |

When both FE and BE are implied, order: **contract → BE → BE tests → FE → FE tests → flow-end-validator**.

---

## Plan-agent output

1. `intake.md` — user goal + **what I found** + user spec answers + **AI decisions** table
2. `plan.md` — steps with agents, context files, `done_when` (only after spec questions closed)
3. Do **not** write application code

Every plan must:

1. Start with `navigator`
2. Put **contract before implementation** for new API surfaces
3. Put **implementation before testing agents**
4. End with `flow-end-validator` (refresh + validate + sign-off)
5. Map each acceptance checkbox to at least one `done_when`

---

## Orchestrator

- Proceed when `intake.md` has a user goal and `plan.md` exists
- Skip or fast-complete a step when index proves nothing to do (e.g. testing step + empty `missing_tests` for scope)
- Never ask the user to choose stack, reuse, or test policy

---

## Specialists

Before writing code, read assigned context MDs and run `find_symbol` for names you plan to add.

After writing exports, add `## <file-path>` + `purpose` row in the correct context MD.

After each implementation batch: remind or run index build + sync.
