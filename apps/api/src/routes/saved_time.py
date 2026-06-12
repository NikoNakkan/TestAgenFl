from pydantic import BaseModel

from fastapi import APIRouter

from src.services.saved_time import get_saved_time, set_saved_time

router = APIRouter(prefix="/api", tags=["saved-time"])


class SavedTimeBody(BaseModel):
    value: str


class SavedTimeResponse(BaseModel):
    value: str | None


@router.get("/saved-time", response_model=SavedTimeResponse)
def read_saved_time() -> SavedTimeResponse:
    return SavedTimeResponse(value=get_saved_time())


@router.put("/saved-time", response_model=SavedTimeResponse)
def update_saved_time(body: SavedTimeBody) -> SavedTimeResponse:
    return SavedTimeResponse(value=set_saved_time(body.value))
