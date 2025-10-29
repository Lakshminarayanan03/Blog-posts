
# 🧭 Blog Dashboard App

A full-stack web application built for the **Frontend Developer Intern Assignment** — featuring authentication, a protected dashboard, and CRUD operations for posts.

---

## 🚀 Project Overview

This project demonstrates a scalable and secure **MERN stack** (MongoDB, Express, React, Node.js) application with **JWT authentication**, **responsive UI**, and a **dashboard** where users can manage posts (create, view, delete).

It includes both **frontend** and **backend** codebases.

---

## 🏗️ Tech Stack

### Frontend
- ⚛️ **React (Vite)**
- 💨 **TailwindCSS**
- 🔒 **JWT Authentication (via Context API)**
- 🌐 **Axios** for API calls
- 🧭 **React Router** for navigation

### Backend
- 🟩 **Node.js + Express.js**
- 🗃️ **MongoDB** with Mongoose
- 🔑 **JWT + bcrypt** for security
- 🧩 **RESTful API structure**
- 🌍 **CORS enabled** for frontend-backend communication

---

## 📂 Project Structure

```

project-root/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── api/
│   │   └── App.jsx
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── .gitignore
└── README.md

````

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/blog-dashboard.git
cd blog-dashboard
````

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend:

```bash
npm run dev
```

> Backend will run on **[http://localhost:3000](http://localhost:3000)**

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

> Frontend will run on **[http://localhost:5173](http://localhost:5173)**

---

## 🔐 Authentication Flow

* **Register →** `/api/users/register`
* **Login →** `/api/users/login`
* **Protected Routes** use JWT stored in Context and sent via headers:

```
Authorization: Bearer <token>
```

---

## 🧾 API Endpoints

### User Routes

| Method | Endpoint              | Description                    |
| :----- | :-------------------- | :----------------------------- |
| POST   | `/api/users/register` | Register new user              |
| POST   | `/api/users/login`    | Login user & return JWT        |
| GET    | `/api/users/profile`  | Fetch user profile (protected) |

### Post Routes

| Method | Endpoint         | Description                 |
| :----- | :--------------- | :-------------------------- |
| GET    | `/api/posts`     | Get all posts               |
| GET    | `/api/posts/:id` | Get a single post           |
| POST   | `/api/posts`     | Create new post (protected) |
| PUT    | `/api/posts/:id` | Update post (protected)     |
| DELETE | `/api/posts/:id` | Delete post (protected)     |

---

## 🖥️ Dashboard Features

* 🔐 **JWT Login & Logout**
* 👤 **Profile Display** in Navbar
* 📝 **CRUD** for Posts
* 🔍 **Search & Filter** (optional enhancement)
* 📱 **Responsive UI**

---

## 🛡️ Security Practices

* Passwords hashed using **bcrypt** before saving to DB
* **JWT token validation** in protected routes
* **CORS enabled** for secure frontend-backend communication
* **.env** used for secret keys and database credentials

---

## 📈 Scalability for Production

To scale the app for production:

* **Frontend:** Host React on Vercel or Netlify
* **Backend:** Host Express server on Render, Railway, or AWS EC2
* **Database:** Use MongoDB Atlas
* **Environment Management:** Store secrets securely using environment variables
* **Performance:** Add caching (Redis), pagination, and compression middleware
* **Monitoring:** Add logging via Winston or PM2

---

## 🧪 API Testing

All routes can be tested using **Postman**.
A sample Postman collection is included:

📁 `postman_collection.json`

---

## 👥 Author

**Lakshminarayanan R**
badhrinarayanan1605@gmail.com

---

```



