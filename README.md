<<<<<<< HEAD
# project suspended ⚠️
=======
# Codium - Docker-Based Online Code Editor

A modern, secure online code editor with Docker-based code execution for multiple programming languages.

## 🚀 Features

### ✨ Code Editor
- **Monaco Editor** - Professional code editor (same as VS Code)
- **Multi-language Support** - 13+ programming languages
- **Real-time Execution** - Instant code execution with output
- **Syntax Highlighting** - Full language support with IntelliSense
- **Dark Theme** - Modern, eye-friendly interface

### 🔒 Security & Isolation
- **Docker Containers** - Each code execution runs in isolated containers
- **Resource Limits** - Memory and CPU restrictions for safety
- **Network Isolation** - No network access for executed code
- **Automatic Cleanup** - Containers are destroyed after execution

### 📚 Supported Languages
- **JavaScript** - Node.js execution
- **Python** - Python 3.11
- **Java** - OpenJDK 17
- **C++** - GCC 12
- **C** - GCC 12
- **TypeScript** - Node.js with ts-node
- **React** - Component validation
- **HTML** - String processing
- **Go** - Go 1.21
- **Rust** - Rust 1.75
- **PHP** - PHP 8.2
- **Ruby** - Ruby 3.2
- **Markdown** - Text processing

### 👤 User Features
- **Authentication** - JWT-based user registration/login
- **Snippet Management** - Save, organize, and share code snippets
- **Share Functionality** - Native share API or clipboard fallback
- **Responsive Design** - Works on desktop and mobile

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │    Backend      │    │ Code Executor   │
│   (React)       │◄──►│   (Express)     │◄──►│   (Docker)      │
│   Port: 3000    │    │   Port: 5000    │    │   Port: 3001    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │
                              ▼
                       ┌─────────────────┐
                       │   MySQL DB      │
                       │   Port: 3306    │
                       └─────────────────┘
```

## 🐳 Quick Start with Docker

### Prerequisites
- Docker
- Docker Compose

### 1. Clone the Repository
```bash
git clone <repository-url>
cd codium
```

### 2. Run the Setup Script
```bash
chmod +x setup.sh
./setup.sh
```

### 3. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Code Executor**: http://localhost:3001

## 🔧 Manual Setup

### 1. Environment Configuration

Create `.env` files:

**Backend** (`backend/.env`):
```env
PORT=5000
NODE_ENV=development
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
DB_HOST=mysql
DB_USER=root
DB_PASSWORD=password
DB_NAME=code_editor
FRONTEND_URL=http://localhost:3000
CODE_EXECUTOR_URL=http://code-executor:3001
```

**Frontend** (`frontend/.env`):
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### 2. Start Services

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 🧪 Testing Code Execution

### JavaScript Example
```javascript
console.log("Hello from Codium!");
for(let i = 1; i <= 5; i++) {
  console.log(`Count: ${i}`);
}
```

### Python Example
```python
print("Hello from Python!")
for i in range(1, 6):
    print(f"Count: {i}")
```

### Java Example
```java
System.out.println("Hello from Java!");
for(int i = 1; i <= 5; i++) {
    System.out.println("Count: " + i);
}
```

### C++ Example
```cpp
std::cout << "Hello from C++!" << std::endl;
for(int i = 1; i <= 5; i++) {
    std::cout << "Count: " << i << std::endl;
}
```

## 🔒 Security Features

### Container Security
- **Read-only Root Filesystem** - Prevents file system modifications
- **No Network Access** - Isolates code from external resources
- **Resource Limits** - 512MB memory, 50% CPU limit
- **Non-root User** - Code runs as unprivileged user
- **Security Options** - No new privileges allowed

### Application Security
- **JWT Authentication** - Secure token-based authentication
- **Input Validation** - Comprehensive request validation
- **Rate Limiting** - Prevents abuse
- **CORS Protection** - Controlled cross-origin access
- **Helmet Security** - Various security headers

## 📊 Performance

### Execution Limits
- **Timeout**: 10 seconds per execution
- **Memory**: 512MB per container
- **CPU**: 50% limit per container
- **Output**: 1MB limit
- **Code Size**: 10,000 characters max

### Scalability
- **Container Isolation** - Multiple executions can run simultaneously
- **Automatic Cleanup** - Resources are freed after execution
- **Stateless Design** - No persistent state between executions

## 🛠️ Development

### Project Structure
```
codium/
├── frontend/              # React.js frontend
├── backend/               # Express.js API server
├── docker/                # Docker configurations
│   ├── Dockerfile.*       # Language-specific containers
│   ├── code-executor.js   # Docker execution service
│   └── package.json       # Executor dependencies
├── database/              # MySQL schema
├── docker-compose.yml     # Service orchestration
└── setup.sh              # Quick setup script
```

### Adding New Languages

1. **Create Dockerfile** in `docker/` directory
2. **Update language mappings** in `docker/code-executor.js`
3. **Add language support** in frontend `LANGUAGES` array
4. **Test execution** with sample code

### Local Development

```bash
# Start only database
docker-compose up mysql -d

# Run frontend locally
cd frontend && npm start

# Run backend locally
cd backend && npm run dev

# Run code executor locally
cd docker && npm start
```

## 🚨 Troubleshooting

### Common Issues

**Docker not running:**
```bash
# Start Docker service
sudo systemctl start docker
```

**Port conflicts:**
```bash
# Check what's using the ports
lsof -i :3000
lsof -i :5000
lsof -i :3001
```

**Container build failures:**
```bash
# Clean and rebuild
docker-compose down
docker system prune -f
docker-compose build --no-cache
```

**Database connection issues:**
```bash
# Check MySQL container
docker-compose logs mysql
```

## 📝 API Documentation

### Code Execution
```http
POST /api/run
Content-Type: application/json

{
  "code": "console.log('Hello World');",
  "language": "javascript"
}
```

### Authentication
```http
POST /api/auth/register
POST /api/auth/login
```

### Snippets (Protected)
```http
GET /api/snippets
POST /api/snippets
PUT /api/snippets/:id
DELETE /api/snippets/:id
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- **Monaco Editor** - Microsoft's VS Code editor component
- **Docker** - Containerization platform
- **React** - Frontend framework
- **Express.js** - Backend framework
>>>>>>> 896c2c3 (proposed to the README.md)
