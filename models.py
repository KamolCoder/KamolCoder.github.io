from sqlalchemy import Column, Integer, String, Text
from database import Base

class PetGood(Base):
    __tablename__ = "petgoods"

    id = Column(Integer, primary_key=True, index=True)
    code = Column(String, unique=True, index=True, nullable=False)
    title = Column(String, nullable=False)
    images = Column(Text)  # Store as JSON string (comma-separated URLs)