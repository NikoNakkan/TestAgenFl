from fastapi import APIRouter

router = APIRouter(prefix="/api", tags=["info"])

APP_NAME = "test-project-agentic-flow"
APP_VERSION = "0.1.0"


@router.get("/info")
def get_info() -> dict[str, str]:
    return {"name": APP_NAME, "version": APP_VERSION}
