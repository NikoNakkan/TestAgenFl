from pathlib import Path

import pytest
from fastapi.testclient import TestClient

from src.db import init_db
from src.main import app


@pytest.fixture
def client(tmp_path: Path, monkeypatch: pytest.MonkeyPatch):
    db_file = tmp_path / "test.db"
    monkeypatch.setenv("DATABASE_URL", f"sqlite:///{db_file}")
    init_db()
    with TestClient(app) as test_client:
        yield test_client


def test_get_saved_time_defaults_null(client: TestClient):
    response = client.get("/api/saved-time")
    assert response.status_code == 200
    assert response.json() == {"value": None}


def test_put_saved_time_persists_iso_string(client: TestClient):
    iso = "2026-06-11T14:30:00.000Z"
    put = client.put("/api/saved-time", json={"value": iso})
    assert put.status_code == 200
    assert put.json() == {"value": iso}

    get = client.get("/api/saved-time")
    assert get.json() == {"value": iso}


def test_put_saved_time_overwrites_previous(client: TestClient):
    client.put("/api/saved-time", json={"value": "2026-06-11T10:00:00.000Z"})
    updated = "2026-06-11T18:45:30.123Z"
    put = client.put("/api/saved-time", json={"value": updated})
    assert put.json() == {"value": updated}
