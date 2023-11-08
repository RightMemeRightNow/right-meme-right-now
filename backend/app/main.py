from contextlib import asynccontextmanager

import pandas as pd
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from app.api.v1.api import router as api_router
from app.api.v1.endpoints.images import data


@asynccontextmanager
async def lifespan(app: FastAPI):
    data["df"] = pd.read_csv('images.csv')
    yield
    data.clear()

app = FastAPI(lifespan=lifespan)

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["GET"],
    allow_headers=["*"],
)


@app.get("/healthcheck")
async def health_check():
    return {"message": "OK"}


app.include_router(api_router, prefix="/api/v1")
