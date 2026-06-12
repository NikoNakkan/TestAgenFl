# Intake — TASK-003

## User goal (verbatim)

> Add a dialog that changes the color of the background based on our current flow

## What I found

- `App` (id 124) uses `BaseButton`, `useToggleState` — toggle state is the "flow"
- No API/DB changes needed — reuse persisted toggle value
- No `FlowDialog` in graph

## Spec clarifications

N/A — flow = true/false toggle; dialog shows active/idle; background follows state.

## AI decisions

| Decision | Value |
|----------|-------|
| Stack | FE only |
| In scope | `FlowDialog` component; `App` background + dialog wired to `useToggleState` |
| Out of scope | BE, new API |
| Reuse | `useToggleState`, `BaseButton` unchanged |
