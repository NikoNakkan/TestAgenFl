# Frontend components

Top node = source file path. One row per exported component.

## apps/web-react/src/App.tsx

| symbol_id | name | purpose | tests | depends_on |
|-----------|------|---------|-------|------------|
| 124 | App | Root shell; flow background + FlowDialog + BaseButton | apps/web-react/src/App.test.tsx | BaseButton, FlowDialog, fetchInfo, useToggleState |

## apps/web-react/src/components/FlowDialog/FlowDialog.tsx

| symbol_id | name | purpose | tests | depends_on |
|-----------|------|---------|-------|------------|
| 136 | FlowDialog | Status dialog; reflects true/false flow state; nests TimeDialog | apps/web-react/src/components/FlowDialog/FlowDialog.test.tsx |  |

## apps/web-react/src/components/TimeDialog/TimeDialog.tsx

| symbol_id | name | purpose | tests | depends_on |
|-----------|------|---------|-------|------------|
| 140 | TimeDialog | Nested time dialog; live clock + save Time button | apps/web-react/src/components/TimeDialog/TimeDialog.test.tsx | useSavedTime |

## apps/web-react/src/components/BaseButton/BaseButton.tsx

| symbol_id | name | purpose | tests | depends_on |
|-----------|------|---------|-------|------------|
| 129 | BaseButton | Foundation true/false button — app-wide base control | apps/web-react/src/components/BaseButton/BaseButton.test.tsx |  |
