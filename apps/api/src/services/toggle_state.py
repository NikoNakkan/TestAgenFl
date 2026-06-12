from src.db import TOGGLE_KEY, get_connection


def get_toggle_state() -> bool:
    with get_connection() as conn:
        row = conn.execute(
            "SELECT value FROM app_state WHERE key = ?",
            (TOGGLE_KEY,),
        ).fetchone()
    if row is None:
        return False
    return bool(row["value"])


def set_toggle_state(value: bool) -> bool:
    with get_connection() as conn:
        conn.execute(
            """
            INSERT INTO app_state (key, value) VALUES (?, ?)
            ON CONFLICT(key) DO UPDATE SET value = excluded.value
            """,
            (TOGGLE_KEY, int(value)),
        )
        conn.commit()
    return value
