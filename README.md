🚀 Taks Management Assigning Project Tracker

A Full-Stack Task Management & Project Tracking Application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) with secure JWT Authentication & Authorization.

This application allows users to securely register, login, and manage their assigned tasks efficiently.

🛠️ Tech Stack
🔹 Frontend

React.js

Axios

React Router DOM

Context API

CSS 

🔹 Backend

Node.js

Express.js

MongoDB

Mongoose

JWT (JSON Web Token)

bcrypt (Password Hashing)

Cookie Parser

CORS

dotenv

🔐 Core Features

✅ User Registration

✅ Secure Login System

✅ Password Hashing using bcrypt

✅ JWT Token Generation

✅ HTTP-Only Cookie Storage

✅ Protected Routes Middleware

✅ Create Tasks

✅ Assign Tasks

✅ Update Tasks

✅ Delete Tasks

✅ Task Status Tracking (Completed / Pending)

✅ User-Specific Data Access

✅ Error Handling & Validation

📂 Project Structure
Taks_Management_Assigning_project_tracker/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   └── package.json
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/diya5maheshwari/Taks_Management_Assigning_project_tracker.git
cd Taks_Management_Assigning_project_tracker

2️⃣ Backend Setup
cd backend
npm install


Create a .env file inside backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Start backend server:

npm start

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173


Backend runs on:

http://localhost:5000

🔑 Authentication Flow

User sends credentials via Axios.

Backend validates input.

Password is compared using bcrypt.

JWT token is generated using jwt.sign().

Token is stored in HTTP-only cookies.

Middleware verifies token for protected routes.

🛡 Authorization Logic

Only authenticated users can access task routes.

Users can only manage their own assigned tasks.

Middleware validates JWT before processing request.

📌 API Endpoints
🔐 Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
GET	/api/auth/logout	Logout user
📋 Task Routes
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task
🧠 Concepts Implemented

RESTful API

MVC Architecture

Middleware

JWT Authentication

Authorization

Cookie-Based Token Storage

Environment Variables

Secure Password Hashing

State Management

🚀 Future Improvements

🔄 Refresh Token Implementation

📊 Task Filtering & Sorting

📱 Fully Responsive UI

🌍 Deployment (Render / Vercel / Railway)

📑 Swagger Documentation

👩‍💻 Author

Diya Maheshwari

GitHub: https://github.com/diya5maheshwari
