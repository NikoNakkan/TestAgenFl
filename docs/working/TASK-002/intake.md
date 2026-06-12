# Intake — TASK-002

## User goal (verbatim)

> Make a generic true or false button that writes in the DB the state. It should have nice styling and be the BASEBUTTON of our app.

## AI decisions

| Decision | Value | Basis |
|----------|-------|-------|
| Stack | React + FastAPI + SQLite | goal mentions DB; repo layout |
| In scope | `BaseButton` component (app foundation); `GET/PUT /api/toggle-state`; SQLite persistence; demo on App page | goal |
| Out of scope | Auth, multiple keys, migrations framework, design system beyond BaseButton | agent-decisions |
| API surfaces | `GET /api/toggle-state`, `PUT /api/toggle-state` body `{ value: bool }` | DB read/write for boolean |
| UI surfaces | `BaseButton` in `components/BaseButton/`; `useToggleState` hook; App demo row | BASEBUTTON foundation |
| Data / env | SQLite file `apps/api/data/app.db`; `DATABASE_URL` optional override | goal says DB |
| Reuse strategy | Extend `main.py`, `App.tsx`; no existing BaseButton (index empty) | navigator |
| Test strategy | New exports → `missing_tests` gap fill | rules-testing |
| Acceptance | See plan.md | derived |

## Acceptance

- [ ] `BaseButton` toggles true/false with distinct styling
- [ ] State persists in SQLite across refresh
- [ ] `GET` returns current value; `PUT` updates it
- [ ] Tests pass; index synced
