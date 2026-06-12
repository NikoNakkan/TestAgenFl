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


def test_get_toggle_state_defaults_false(client: TestClient):
    response = client.get("/api/toggle-state")
    assert response.status_code == 200
    assert response.json() == {"value": False}


def test_put_toggle_state_persists_true(client: TestClient):
    put = client.put("/api/toggle-state", json={"value": True})
    assert put.status_code == 200
    assert put.json() == {"value": True}

    get = client.get("/api/toggle-state")
    assert get.json() == {"value": True}


def test_put_toggle_state_can_set_false(client: TestClient):
    client.put("/api/toggle-state", json={"value": True})
    put = client.put("/api/toggle-state", json={"value": False})
    assert put.json() == {"value": False}
