# Environment variables

Top node = app name (`web-react` or `api`).

## web-react

| key | required | description | used_in_files |
|-----|----------|-------------|---------------|
| VITE_API_URL | no | Backend base URL (default localhost:8000) | apps/web-react/src/api/info.ts, apps/web-react/src/api/toggleState.ts |

## api

| key | required | description | used_in_files |
|-----|----------|-------------|---------------|
| DATABASE_URL | no | SQLite path (`sqlite:///...`) — default `apps/api/data/app.db` | apps/api/src/db.py |
