# 👩‍💼 Employee Management System - Full Stack

A full-featured Employee Management System built with the **MERN** stack (MongoDB, Express, React, Node.js), styled using **Tailwind CSS**, and secured using **Firebase Authentication** and **JWT**.

---

## 🚀 Features

- 🔐 Secure login & registration with Firebase Authentication
- 🧾 JWT-based route protection
- 📄 CRUD operations for employee records
- 🧑‍💼 Role-based access (Admin/Manager/Employee)
- 📊 Dynamic dashboard with live stats (employees count, active/inactive)
- 🔎 Search & filter employees
- ✅ Pagination support
- 🎨 Tailwind CSS UI with responsive layout
- 📂 RESTful API with Express & MongoDB
- 🛠️ Clean folder structure and modular code

---

## 🛠️ Tech Stack

### 🔹 Frontend

- React.js
- React Router
- Axios
- Tailwind CSS
- Firebase Authentication

### 🔹 Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Token (JWT)
- Firebase Admin SDK

---

## 🖥️ Screenshots

![Dashboard Screenshot](./screenshots/dashboard.png)
> Employee overview dashboard with real-time data and status

---

## 🏗️ Project Structure

```bash
Employee-Management/
│
├── client/                     # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── tailwind.config.js
│
├── server/                     # Node.js + Express Backend
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── routes/
│   ├── config/
│   └── index.js
│
├── .env
├── package.json
└── README.md
