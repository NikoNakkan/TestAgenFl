from pydantic import BaseModel

from fastapi import APIRouter

from src.services.toggle_state import get_toggle_state, set_toggle_state

router = APIRouter(prefix="/api", tags=["toggle-state"])


class ToggleStateBody(BaseModel):
    value: bool


class ToggleStateResponse(BaseModel):
    value: bool


@router.get("/toggle-state", response_model=ToggleStateResponse)
def read_toggle_state() -> ToggleStateResponse:
    return ToggleStateResponse(value=get_toggle_state())


@router.put("/toggle-state", response_model=ToggleStateResponse)
def update_toggle_state(body: ToggleStateBody) -> ToggleStateResponse:
    return ToggleStateResponse(value=set_toggle_state(body.value))
