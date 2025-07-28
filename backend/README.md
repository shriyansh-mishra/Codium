# Online Code Editor - Backend

Express.js backend API for the online code editor application.

## Features

- JWT-based authentication
- User registration and login
- Code execution (JavaScript, React, HTML)
- Snippet management (CRUD operations)
- Rate limiting
- Security middleware

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment variables:**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

3. **Database setup:**
   - Create MySQL database using `../database/schema.sql`
   - Update database credentials in `.env`

4. **Start development server:**
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Code Execution
- `POST /api/run` - Execute JavaScript code

### Snippets (Protected routes)
- `GET /api/snippets` - Get user's snippets
- `GET /api/snippets/:id` - Get specific snippet
- `POST /api/snippets` - Create new snippet
- `PUT /api/snippets/:id` - Update snippet
- `DELETE /api/snippets/:id` - Delete snippet

### Health Check
- `GET /api/health` - Server health status

## Environment Variables

- `PORT` - Server port (default: 5000)
- `JWT_SECRET` - JWT signing secret
- `DB_HOST` - Database host
- `DB_USER` - Database username
- `DB_PASSWORD` - Database password
- `DB_NAME` - Database name
- `FRONTEND_URL` - Frontend URL for CORS

## Code Execution

The backend supports execution of:
- **JavaScript**: Direct Node.js execution
- **React**: Component validation and logging
- **HTML**: String output and validation

All code runs in isolated temporary directories with:
- 10-second timeout
- 1MB output limit
- Automatic cleanup 