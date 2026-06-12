from fastapi.testclient import TestClient

from src.main import app

client = TestClient(app)


def test_get_info_returns_metadata():
    response = client.get("/api/info")
    assert response.status_code == 200
    body = response.json()
    assert body["name"] == "test-project-agentic-flow"
    assert body["version"] == "0.1.0"
