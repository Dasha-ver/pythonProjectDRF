from pydantic import BaseModel, validator, field_validator
from typing import List


class Child(BaseModel):
    name: str
    last_name: str
    age: int


class Person(BaseModel):
    name: str
    age: int
    children: List[Child]

    @field_validator('name')
    def validate_name(cls, raw_name):
        min_len = 2
        max_len = 15
        if min_len <= len(raw_name) < max_len:
            return raw_name
        else:
            raise ValueError(
                f"name length must be in range [{min_len}, {max_len}], but actual ->'{raw_name}' len= {len(raw_name)}")

    @field_validator("age")
    def validate_age(cls, raw_age):
        min_age = 0
        max_age = 120
        if min_age <= raw_age < max_age:
            return raw_age
        else:
            raise ValueError(
                f"age must be in range [{min_age}, {max_age}], but actual ->'{raw_age}' = {raw_age}")




