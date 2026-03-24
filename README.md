# User Authentication API

A simple user authentication API built with FastAPI, JWT, and Passlib.

## Features
- User registration
- User login with JWT token generation
- Protected routes using JWT authentication
- In-memory database (for demonstration purposes)

## Installation

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Run the server:
   ```bash
   uvicorn app.main:app --reload
   ```

## Endpoints
- `POST /register`: Register a new user
- `POST /token`: Login and get an access token
- `GET /users/me`: Get current user info (requires authentication)
- `GET /`: API root
