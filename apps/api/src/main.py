from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.db import init_db
from src.routes.health import router as health_router
from src.routes.info import router as info_router
from src.routes.saved_time import router as saved_time_router
from src.routes.toggle_state import router as toggle_state_router


@asynccontextmanager
async def lifespan(_: FastAPI):
    init_db()
    yield


app = FastAPI(title="test-project-agentic-flow", lifespan=lifespan)

# Vite dev server (browser fetch from :5173 → API :8000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router)
app.include_router(info_router)
app.include_router(toggle_state_router)
app.include_router(saved_time_router)
