# test-project-agentic-flow

PoC monorepo bootstrapped via [agentic-dev-toolkit](../AI-news/agentic-dev-toolkit/HANDOVER.md) flow.

## Stack

- `apps/web-react` — Vite + React + TypeScript + react-i18next
- `apps/api` — FastAPI (`GET /health`, `GET /api/info`, toggle + saved-time APIs)
- `packages/contract` — OpenAPI stub

## Theming & i18n

- Theme tokens: `apps/web-react/src/styles/theme.css` (only file with raw colors)
- Locales: `apps/web-react/src/i18n/locales/en.json`, `el.json`
- Rules: `docs/rules/rules-theming.md`, `docs/rules/rules-i18n.md`
- Key catalog: `docs/context/fe-i18n.md`

## Run

```powershell
# Backend
cd apps\api
pip install -r requirements.txt
uvicorn src.main:app --reload --port 8000

# Frontend (new terminal)
cd apps\web-react
npm install
npm run dev
```

## Agentic workflow

Toolkit source: [agentic-dev-toolkit](../AI-news/agentic-dev-toolkit/HANDOVER.md)

Task state: `docs/working/INDEX.md` — context + index contract: `docs/context/CODE-INDEX.md`

```powershell
# After any export change (build + sync + validate)
python scripts/code_index_refresh.py --repo .

python scripts/code_index_query.py --repo . find_symbol FlowDialog
python scripts/code_index_query.py --repo . missing_tests
python scripts/dump_graph.py
```
