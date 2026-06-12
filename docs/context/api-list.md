# API routes (backend)

Top node = handler file path. One row per route.

## apps/api/src/routes/health.py

| symbol_id | method | path | handler | request_type | response_type | tests |
|-----------|--------|------|---------|--------------|---------------|-------|
| 130 | GET | /health | get_health |  | HealthResponse | apps/api/tests/test_health.py |

## apps/api/src/routes/info.py

| symbol_id | method | path | handler | request_type | response_type | tests |
|-----------|--------|------|---------|--------------|---------------|-------|
| 131 | GET | /api/info | get_info |  | InfoResponse | apps/api/tests/test_info.py |

## apps/api/src/routes/toggle_state.py

| symbol_id | method | path | handler | request_type | response_type | tests |
|-----------|--------|------|---------|--------------|---------------|-------|
| 132 | GET | /api/toggle-state | read_toggle_state |  | ToggleStateResponse | apps/api/tests/test_toggle_state.py |
| 133 | PUT | /api/toggle-state | update_toggle_state | ToggleStateBody | ToggleStateResponse | apps/api/tests/test_toggle_state.py |

## apps/api/src/routes/saved_time.py
| symbol_id | method | path | handler | request_type | response_type | tests |
|-----------|--------|------|---------|--------------|---------------|-------|
| 141 | GET | /api/saved-time | read_saved_time |  | SavedTimeResponse | apps/api/tests/test_saved_time.py |
| 142 | PUT | /api/saved-time | update_saved_time | SavedTimeBody | SavedTimeResponse | apps/api/tests/test_saved_time.py |
