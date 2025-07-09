# Pet Goods CRUD API

A FastAPI application for managing pet goods with code, title, and images.

## Features

- **Create** pet goods with unique codes
- **Read** pet goods (individual or list with pagination)
- **Update** pet goods (partial updates supported)
- **Delete** pet goods
- **Search** by unique code
- SQLite database with SQLAlchemy ORM
- Interactive API documentation (Swagger UI)

## Installation

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the application:
```bash
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`

## API Documentation

Once running, visit:
- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

## API Endpoints

### Root
- `GET /` - Welcome message

### Pet Goods
- `POST /petgoods/` - Create a new pet good
- `GET /petgoods/` - Get all pet goods (with pagination)
- `GET /petgoods/{petgood_id}` - Get a specific pet good by ID
- `GET /petgoods/by-code/{code}` - Get a specific pet good by code
- `PUT /petgoods/{petgood_id}` - Update a pet good
- `DELETE /petgoods/{petgood_id}` - Delete a pet good

## Data Model

### PetGood
```json
{
  "id": 1,
  "code": "DOG001",
  "title": "Premium Dog Food",
  "images": [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg"
  ]
}
```

## Example Usage

### Create a Pet Good
```bash
curl -X POST "http://localhost:8000/petgoods/" \
  -H "Content-Type: application/json" \
  -d '{
    "code": "DOG001",
    "title": "Premium Dog Food",
    "images": ["https://example.com/dogfood.jpg"]
  }'
```

### Get All Pet Goods
```bash
curl -X GET "http://localhost:8000/petgoods/"
```

### Get Pet Good by ID
```bash
curl -X GET "http://localhost:8000/petgoods/1"
```

### Update Pet Good
```bash
curl -X PUT "http://localhost:8000/petgoods/1" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Premium Dog Food",
    "images": ["https://example.com/new-image.jpg"]
  }'
```

### Delete Pet Good
```bash
curl -X DELETE "http://localhost:8000/petgoods/1"
```

## Database

The application uses SQLite database (`petgoods.db`) which will be created automatically when you first run the application.

## Project Structure

```
├── main.py          # FastAPI application and endpoints
├── models.py        # SQLAlchemy database models
├── schemas.py       # Pydantic schemas for request/response
├── crud.py          # Database CRUD operations
├── database.py      # Database configuration
├── requirements.txt # Python dependencies
└── README.md        # Documentation
```