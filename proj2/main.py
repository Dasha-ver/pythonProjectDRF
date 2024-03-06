import uvicorn
from fastapi import FastAPI, Query
from database import engine, Base
from routers import router

Base.metadata.create_all(bind=engine)
app = FastAPI()
app.include_router(router, prefix='/car')


@app.get("/")
def read_root():
    return {"Hello": "World"}


if __name__ == '__main__':
    uvicorn.run('main:app', host='127.0.0.1', port=8080, reload=True)
