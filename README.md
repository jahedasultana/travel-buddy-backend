# Travel Buddy & Meetup Platform - Backend

A Node.js/Express backend API for connecting travelers and organizing meetups.

## Features

- **Authentication**: JWT-based auth with bcrypt password hashing
- **User Management**: Profile creation, editing, and management
- **Travel Plans**: CRUD operations for travel itineraries
- **Matching System**: Find compatible travel companions
- **Review System**: Rate and review fellow travelers
- **Payment Integration**: Stripe subscription management
- **File Upload**: Cloudinary integration for profile images

## Tech Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js v5
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT + bcryptjs
- **Validation**: Zod
- **File Upload**: Cloudinary
- **Payment**: Stripe
- **Architecture**: Modular MVC Pattern

## Project Structure

```
src/
├── app/
│   ├── error/              # Error handling
│   ├── helper/             # Utility functions
│   ├── middleware/         # Express middleware
│   ├── modules/            # Feature modules
│   │   ├── auth/           # Authentication
│   │   ├── user/           # User management
│   │   ├── travel-plan/    # Travel plans
│   │   ├── review/         # Review system
│   │   └── payment/        # Payment processing
│   ├── routes/             # Route definitions
│   ├── shared/             # Shared utilities
│   └── types/              # TypeScript types
├── config/                 # Configuration
├── app.ts                  # Express app setup
└── server.ts               # Server entry point
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- PostgreSQL
- npm or yarn

### Installation

1. **Clone and setup**
   ```bash
   cd backend
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Database Setup**
   ```bash
   npm run db:generate
   npm run db:push
   ```

4. **Start Development**
   ```bash
   npm run dev
   ```

### Environment Variables

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/travel_buddy_db"

# JWT
JWT_SECRET="your-super-secret-jwt-key-here"
JWT_EXPIRES_IN="7d"

# Server
PORT=5000
NODE_ENV="development"

# Cloudinary
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Stripe
STRIPE_SECRET_KEY="sk_test_your-stripe-secret-key"
STRIPE_PUBLISHABLE_KEY="pk_test_your-stripe-publishable-key"

# CORS
FRONTEND_URL="http://localhost:3000"
```

## API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user

### Users (Coming Soon)
- `GET /api/v1/users/:id` - Get user profile
- `PATCH /api/v1/users/:id` - Update profile

### Travel Plans (Coming Soon)
- `POST /api/v1/travel-plans` - Create travel plan
- `GET /api/v1/travel-plans` - Get all travel plans
- `GET /api/v1/travel-plans/match` - Search & match travelers

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio

## Architecture

This project follows a **Modular MVC Pattern**:

- **Controllers**: Handle HTTP requests/responses
- **Services**: Business logic and data processing
- **Validation**: Zod schemas for input validation
- **Interfaces**: TypeScript type definitions
- **Routes**: Express route definitions
- **Middleware**: Authentication, validation, error handling

## Contributing

1. Follow the existing modular structure
2. Add proper TypeScript types
3. Include Zod validation for all inputs
4. Write meaningful commit messages
5. Test your changes thoroughly

## License

MIT License