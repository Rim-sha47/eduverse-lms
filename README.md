# 🎓 Rimsha EduVerse — MERN Stack Learning Management System

A premium full-stack Learning Management System built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).

> Modern online learning platform where students can join any course, instructors can create courses, and admins can manage the platform.

---

# ✨ Features

## 🔐 Authentication & Security

- JWT Authentication
- Secure Password Hashing with bcrypt
- Role Based Access Control
- Protected Routes
- Login / Register System

---

## 👨‍🎓 Student Features

- Browse All Courses
- Search Courses
- Enroll in Courses
- My Courses Dashboard
- Track Learning Progress
- Manage Profile

---

## 👩‍🏫 Instructor Features

- Create Courses
- Manage Courses
- Add Course Details
- View Students Enrolled
- Instructor Dashboard

---

## 👑 Admin Features

- Manage Users
- Manage Courses
- View Platform Statistics
- Admin Dashboard

---

## 🎨 UI / UX

- Premium Modern Design
- Dark Theme + Glassmorphism
- Fully Responsive
- Smooth Animations
- Toast Notifications
- Clean Dashboard UI
- Professional Course Cards

---

# 🛠️ Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | React.js, Vite, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Auth | JWT, bcryptjs |
| Routing | React Router DOM |
| API | Axios |

---

# 📂 Project Structure

```bash
rimsha-eduverse/
│── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
│── frontend/
│   └── src/
│       ├── api/
│       ├── components/
│       ├── pages/
│       │   ├── student/
│       │   ├── instructor/
│       │   └── admin/
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
└── README.md
md
🚀 Installation
1️⃣ Clone Repository
git clone <your-github-repo-url>
cd rimsha-eduverse

2️⃣ Backend Setup
cd backend
npm install
npm run dev

Create .env

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=rimsha_secret_key
JWT_EXPIRE=30d

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

Runs on:

http://localhost:5173

5173
🔌 API Routes
Auth
POST /api/auth/register
POST /api/auth/login
Courses
GET /api/courses
GET /api/courses/:id
POST /api/courses/create
Enrollment
POST /api/courses/enroll/:id

👤 Demo Roles
Role	Access
Student	Join Courses
Instructor	Create Courses
Admin	Manage Platform
🌍 Future Improvements
Live Classes
Video Lessons
Certificates
Payment Integration
Chat System
Quiz System
AI Tutor

🚢 Deployment
Frontend
Vercel
Netlify
Backend
Render
Railway
Database
MongoDB Atlas
👩‍💻 Developer

Rimsha Riaz

Riaz

💙 Branding
Rimsha EduVerse

Learn Any Skill, Anytime, Anywhere.

⭐ Support

If you like this project:

⭐ Star the repository
🍴 Fork it
📢 Share it

📜 License
his project is open source for educational purposes.

Built with ❤️ by Rimsha Riaz
