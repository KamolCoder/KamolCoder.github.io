from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from typing import List

import crud
import models
import schemas
from database import SessionLocal, engine, get_db

# Create database tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Pet Goods CRUD API",
    description="A FastAPI application for managing pet goods with code, title, and images",
    version="1.0.0"
)

@app.get("/")
def read_root():
    return {"message": "Welcome to Pet Goods API"}

@app.post("/petgoods/", response_model=schemas.PetGood)
def create_petgood(petgood: schemas.PetGoodCreate, db: Session = Depends(get_db)):
    # Check if pet good with this code already exists
    db_petgood = crud.get_petgood_by_code(db, code=petgood.code)
    if db_petgood:
        raise HTTPException(status_code=400, detail="Pet good with this code already exists")
    return crud.create_petgood(db=db, petgood=petgood)

@app.get("/petgoods/", response_model=List[schemas.PetGood])
def read_petgoods(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    petgoods = crud.get_petgoods(db, skip=skip, limit=limit)
    return petgoods

@app.get("/petgoods/{petgood_id}", response_model=schemas.PetGood)
def read_petgood(petgood_id: int, db: Session = Depends(get_db)):
    db_petgood = crud.get_petgood(db, petgood_id=petgood_id)
    if db_petgood is None:
        raise HTTPException(status_code=404, detail="Pet good not found")
    return db_petgood

@app.get("/petgoods/by-code/{code}", response_model=schemas.PetGood)
def read_petgood_by_code(code: str, db: Session = Depends(get_db)):
    db_petgood = crud.get_petgood_by_code(db, code=code)
    if db_petgood is None:
        raise HTTPException(status_code=404, detail="Pet good not found")
    return db_petgood

@app.put("/petgoods/{petgood_id}", response_model=schemas.PetGood)
def update_petgood(petgood_id: int, petgood_update: schemas.PetGoodUpdate, db: Session = Depends(get_db)):
    db_petgood = crud.update_petgood(db, petgood_id=petgood_id, petgood_update=petgood_update)
    if db_petgood is None:
        raise HTTPException(status_code=404, detail="Pet good not found")
    return db_petgood

@app.delete("/petgoods/{petgood_id}")
def delete_petgood(petgood_id: int, db: Session = Depends(get_db)):
    success = crud.delete_petgood(db, petgood_id=petgood_id)
    if not success:
        raise HTTPException(status_code=404, detail="Pet good not found")
    return {"message": "Pet good deleted successfully"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)