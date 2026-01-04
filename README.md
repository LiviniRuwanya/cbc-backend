# CBC Backend

Node.js + Express backend for the CBC project. Provides simple REST endpoints for products, students, and users used by the frontend app.

Getting started
- Prerequisites: `node` (v14+), `npm`.
- Install dependencies: `npm install`
- Configure environment: copy `.env.example` (if present) and set database credentials used by `config/db.js`.
- Run the server: `npm start` or `node server.js`

Repository
- Remote: https://github.com/LiviniRuwanya/cbc-backend.git

Project layout
- `server.js` — application entry
- `routes/` — Express route definitions
- `controllers/` — request handlers
- `models/` — data models and sample data
- `config/` — DB and environment configuration

Tests
- Run tests: `npm test` (if tests exist)


