import os
import sqlite3
from pathlib import Path

DEFAULT_DB_PATH = Path(__file__).resolve().parent.parent / "data" / "app.db"
TOGGLE_KEY = "toggle"
SAVED_TIME_KEY = "saved_time"


def get_database_path() -> Path:
    override = os.environ.get("DATABASE_URL")
    if override:
        if override.startswith("sqlite:///"):
            return Path(override.removeprefix("sqlite:///"))
        return Path(override)
    return DEFAULT_DB_PATH


def get_connection() -> sqlite3.Connection:
    db_path = get_database_path()
    db_path.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    return conn


def init_db() -> None:
    with get_connection() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS app_state (
                key TEXT PRIMARY KEY,
                value INTEGER NOT NULL CHECK (value IN (0, 1))
            )
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS app_strings (
                key TEXT PRIMARY KEY,
                value TEXT NOT NULL
            )
            """
        )
        conn.execute(
            "INSERT OR IGNORE INTO app_state (key, value) VALUES (?, 0)",
            (TOGGLE_KEY,),
        )
        conn.commit()
