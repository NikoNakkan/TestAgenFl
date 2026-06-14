# Frontend i18n (react-i18next)

**Human-maintained.** Namespace keys and purpose. Locale files live under `apps/web-react/src/i18n/locales/`.

| namespace | key | purpose | used_in |
|-----------|-----|---------|---------|
| app | preferences.title | Page heading | App.tsx |
| app | status.title | Status panel heading | App.tsx |
| app | errors.serverUnreachable | API info fetch failure | App.tsx |
| app | errors.saveFailed | Toggle persist failure | App.tsx |
| app | toggle.on | BaseButton label when true | App.tsx |
| app | toggle.off | BaseButton label when false | App.tsx |
| app | flow.on | FlowDialog active label | FlowDialog.tsx |
| app | flow.off | FlowDialog idle label | FlowDialog.tsx |
| time | now | Live clock label | TimeDialog.tsx |
| time | saved | Saved time label | TimeDialog.tsx |
| time | empty | No saved time placeholder | TimeDialog.tsx |
| time | loading | Loading saved time | TimeDialog.tsx |
| time | saveButton | Save current time button | TimeDialog.tsx |
| time | saveError | Save failure message | TimeDialog.tsx |
| time | ariaLabel | Time panel aria-label | TimeDialog.tsx |
| common | toggle.true | BaseButton default true label | BaseButton.tsx |
| common | toggle.false | BaseButton default false label | BaseButton.tsx |

**Adding a key:** update `en.json` + stub in `el.json` → add row here with `purpose`.

## Locale files

| File | Role |
|------|------|
| `apps/web-react/src/i18n/locales/en.json` | Source |
| `apps/web-react/src/i18n/locales/el.json` | Greek stub |

## Namespace layout (`en.json`)

```json
{
  "app": { "preferences": { "title": "..." }, "toggle": { "on": "...", "off": "..." } },
  "time": { "now": "...", "saveButton": "..." },
  "common": { "toggle": { "true": "...", "false": "..." } }
}
```
