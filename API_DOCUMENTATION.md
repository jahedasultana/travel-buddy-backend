# Travel Buddy API Documentation

## Base URL
```
http://localhost:5000/api/v1
```

## Authentication
All protected routes require a Bearer token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## API Endpoints

### Authentication

#### Register User
```http
POST /auth/register
```
**Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "fullName": "John Doe"
}
```

#### Login User
```http
POST /auth/login
```
**Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Users

#### Get All Users
```http
GET /users
```

#### Get User Profile
```http
GET /users/:id
```

#### Update User Profile
```http
PATCH /users/:id
```
**Headers:** `Authorization: Bearer <token>`
**Body (multipart/form-data):**
```json
{
  "fullName": "Updated Name",
  "bio": "Travel enthusiast",
  "currentLocation": "New York",
  "visitedCountries": ["USA", "Canada"],
  "travelInterests": ["hiking", "photography"],
  "profileImage": "<file>"
}
```

### Travel Plans

#### Create Travel Plan
```http
POST /travel-plans
```
**Headers:** `Authorization: Bearer <token>`
**Body:**
```json
{
  "destination": "Paris, France",
  "startDate": "2024-06-01",
  "endDate": "2024-06-10",
  "budgetMin": 1000,
  "budgetMax": 2000,
  "travelType": "SOLO",
  "description": "Exploring Paris",
  "itinerary": "Day 1: Eiffel Tower..."
}
```

#### Get All Travel Plans
```http
GET /travel-plans
```

#### Search Travel Plans
```http
GET /travel-plans/search?destination=Paris&startDate=2024-06-01&travelType=SOLO
```

#### Get Travel Plan by ID
```http
GET /travel-plans/:id
```

#### Update Travel Plan
```http
PATCH /travel-plans/:id
```
**Headers:** `Authorization: Bearer <token>`

#### Delete Travel Plan
```http
DELETE /travel-plans/:id
```
**Headers:** `Authorization: Bearer <token>`

### Reviews

#### Create Review
```http
POST /reviews
```
**Headers:** `Authorization: Bearer <token>`
**Body:**
```json
{
  "revieweeId": "user-id",
  "rating": 5,
  "comment": "Great travel companion!"
}
```

#### Update Review
```http
PATCH /reviews/:id
```
**Headers:** `Authorization: Bearer <token>`

#### Delete Review
```http
DELETE /reviews/:id
```
**Headers:** `Authorization: Bearer <token>`

#### Get User Reviews
```http
GET /reviews/user/:userId
```

### Payments

#### Create Subscription
```http
POST /payments/create-subscription
```
**Headers:** `Authorization: Bearer <token>`
**Body:**
```json
{
  "type": "MONTHLY"
}
```

#### Get User Subscriptions
```http
GET /payments/subscriptions
```
**Headers:** `Authorization: Bearer <token>`

#### Stripe Webhook
```http
POST /payments/webhook
```

## Response Format

### Success Response
```json
{
  "success": true,
  "statusCode": 200,
  "message": "Operation successful",
  "data": { ... }
}
```

### Error Response
```json
{
  "success": false,
  "statusCode": 400,
  "message": "Error message"
}
```

## Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## Data Models

### User
```json
{
  "id": "string",
  "email": "string",
  "fullName": "string",
  "profileImage": "string",
  "bio": "string",
  "currentLocation": "string",
  "visitedCountries": ["string"],
  "travelInterests": ["string"],
  "role": "USER | ADMIN",
  "isSubscribed": "boolean",
  "isVerified": "boolean",
  "averageRating": "number",
  "totalReviews": "number",
  "createdAt": "datetime"
}
```

### Travel Plan
```json
{
  "id": "string",
  "destination": "string",
  "startDate": "datetime",
  "endDate": "datetime",
  "budgetMin": "number",
  "budgetMax": "number",
  "travelType": "SOLO | FAMILY | FRIENDS | COUPLE",
  "description": "string",
  "itinerary": "string",
  "isActive": "boolean",
  "createdAt": "datetime",
  "user": {
    "id": "string",
    "fullName": "string",
    "profileImage": "string",
    "isVerified": "boolean"
  }
}
```

### Review
```json
{
  "id": "string",
  "rating": "number (1-5)",
  "comment": "string",
  "createdAt": "datetime",
  "reviewer": {
    "id": "string",
    "fullName": "string",
    "profileImage": "string"
  },
  "reviewee": {
    "id": "string",
    "fullName": "string",
    "profileImage": "string"
  }
}
```