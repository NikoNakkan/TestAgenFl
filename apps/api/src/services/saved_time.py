from src.db import SAVED_TIME_KEY, get_connection


def get_saved_time() -> str | None:
    with get_connection() as conn:
        row = conn.execute(
            "SELECT value FROM app_strings WHERE key = ?",
            (SAVED_TIME_KEY,),
        ).fetchone()
    if row is None:
        return None
    return str(row["value"])


def set_saved_time(value: str) -> str:
    with get_connection() as conn:
        conn.execute(
            """
            INSERT INTO app_strings (key, value) VALUES (?, ?)
            ON CONFLICT(key) DO UPDATE SET value = excluded.value
            """,
            (SAVED_TIME_KEY, value),
        )
        conn.commit()
    return value
