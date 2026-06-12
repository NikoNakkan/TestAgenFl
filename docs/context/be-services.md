# Backend services

Domain and service functions. Top node = source file path.

| symbol_id | name | purpose | tests | depends_on |
|-----------|------|---------|-------|------------|

## apps/api/src/services/toggle_state.py
| symbol_id | name | purpose | tests | depends_on |
|-----------|------|---------|-------|------------|
| 134 | get_toggle_state | Read boolean toggle from SQLite | apps/api/tests/test_toggle_state.py |  |
| 135 | set_toggle_state | Persist boolean toggle to SQLite | apps/api/tests/test_toggle_state.py |  |

## apps/api/src/services/saved_time.py
| symbol_id | name | purpose | tests | depends_on |
|-----------|------|---------|-------|------------|
| 143 | get_saved_time | Read saved ISO time from SQLite | apps/api/tests/test_saved_time.py |  |
| 144 | set_saved_time | Persist saved ISO time to SQLite | apps/api/tests/test_saved_time.py |  |
