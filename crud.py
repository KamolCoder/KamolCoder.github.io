from sqlalchemy.orm import Session
from models import PetGood
from schemas import PetGoodCreate, PetGoodUpdate
import json

def get_petgood(db: Session, petgood_id: int):
    petgood = db.query(PetGood).filter(PetGood.id == petgood_id).first()
    if petgood:
        # Convert images string back to list
        petgood.images = json.loads(petgood.images) if petgood.images else []
    return petgood

def get_petgood_by_code(db: Session, code: str):
    petgood = db.query(PetGood).filter(PetGood.code == code).first()
    if petgood:
        # Convert images string back to list
        petgood.images = json.loads(petgood.images) if petgood.images else []
    return petgood

def get_petgoods(db: Session, skip: int = 0, limit: int = 100):
    petgoods = db.query(PetGood).offset(skip).limit(limit).all()
    # Convert images string back to list for each item
    for petgood in petgoods:
        petgood.images = json.loads(petgood.images) if petgood.images else []
    return petgoods

def create_petgood(db: Session, petgood: PetGoodCreate):
    # Convert images list to JSON string
    images_json = json.dumps(petgood.images) if petgood.images else "[]"
    
    db_petgood = PetGood(
        code=petgood.code,
        title=petgood.title,
        images=images_json
    )
    db.add(db_petgood)
    db.commit()
    db.refresh(db_petgood)
    
    # Convert back to list for response
    db_petgood.images = json.loads(db_petgood.images) if db_petgood.images else []
    return db_petgood

def update_petgood(db: Session, petgood_id: int, petgood_update: PetGoodUpdate):
    db_petgood = db.query(PetGood).filter(PetGood.id == petgood_id).first()
    if not db_petgood:
        return None
    
    update_data = petgood_update.model_dump(exclude_unset=True)
    
    # Handle images conversion
    if "images" in update_data:
        update_data["images"] = json.dumps(update_data["images"])
    
    for field, value in update_data.items():
        setattr(db_petgood, field, value)
    
    db.commit()
    db.refresh(db_petgood)
    
    # Convert back to list for response
    db_petgood.images = json.loads(db_petgood.images) if db_petgood.images else []
    return db_petgood

def delete_petgood(db: Session, petgood_id: int):
    db_petgood = db.query(PetGood).filter(PetGood.id == petgood_id).first()
    if db_petgood:
        db.delete(db_petgood)
        db.commit()
        return True
    return False