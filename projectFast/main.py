from typing import List
from fastapi import FastAPI, Query
from schemas import Person

app = FastAPI()


@app.get("/test1")
def read_root(parameter: List[str]= Query(["default1", "default2"],min_length=2, max_length=10)):
    return parameter


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/{key}")
def read_item(key: int):
    return {"key": key}


@app.post("/person")
def read_root(person: Person):
    return person
