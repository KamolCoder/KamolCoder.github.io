from pydantic import BaseModel
from typing import List, Optional

class PetGoodBase(BaseModel):
    code: str
    title: str
    images: List[str] = []

class PetGoodCreate(PetGoodBase):
    pass

class PetGoodUpdate(BaseModel):
    code: Optional[str] = None
    title: Optional[str] = None
    images: Optional[List[str]] = None

class PetGood(PetGoodBase):
    id: int

    class Config:
        from_attributes = True