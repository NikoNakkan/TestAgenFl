from pathlib import Path

from src.db import get_connection, get_database_path, init_db


def test_get_database_path_default(tmp_path, monkeypatch):
    monkeypatch.delenv("DATABASE_URL", raising=False)
    path = get_database_path()
    assert path.name == "app.db"
    assert path.parent.name == "data"


def test_get_database_path_override(tmp_path, monkeypatch):
    db_file = tmp_path / "custom.db"
    monkeypatch.setenv("DATABASE_URL", f"sqlite:///{db_file}")
    assert get_database_path() == db_file


def test_init_db_creates_toggle_row(tmp_path, monkeypatch):
    db_file = tmp_path / "test.db"
    monkeypatch.setenv("DATABASE_URL", f"sqlite:///{db_file}")
    init_db()
    with get_connection() as conn:
        row = conn.execute("SELECT value FROM app_state WHERE key = 'toggle'").fetchone()
    assert row is not None
    assert row["value"] == 0
