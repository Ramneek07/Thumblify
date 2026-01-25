# Thumblify

# 🎨 AI Thumbnail Generator – Full-Stack MERN + TypeScript Project

Welcome to the **AI Thumbnail Generator**, a full-stack AI-powered application built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)** with **TypeScript** across the entire codebase.

This application allows users to generate **high-quality AI thumbnails** using text prompts, powered by **Google Gemini API**, all inside a modern, secure, and scalable full-stack architecture.

---

## 🚀 Live Demo

🔗 **Live Application:**
https://thumblify-roan.vercel.app/

---

## ✨ Key Features

* **AI-Powered Thumbnail Generation**
  Generate eye-catching thumbnails using text prompts via **Google Gemini API**.

* **TypeScript Everywhere**
  Fully written in **TypeScript** (Frontend + Backend) for better scalability, safety, and maintainability.

* **Secure User Authentication**
  JWT-based authentication for signup, login, and protected routes.

* **Prompt Customization**
  Users can customize prompts to control style, theme, and creativity of thumbnails.

* **Image Preview & Download**
  Instantly preview generated thumbnails and download them in high quality.

* **Modern Responsive UI**
  Clean, mobile-friendly UI built with **React + Tailwind CSS**.

* **RESTful API Architecture**
  Scalable backend using **Node.js, Express.js, and MongoDB**.

* **Full-Stack MERN Architecture**
  Clean separation of frontend, backend, API services, and database layers.

---

## 🛠️ Tech Stack

| Category         | Technology                                             |
| ---------------- | ------------------------------------------------------ |
| Frontend         | React.js, TypeScript, Prebuilt UI                     |
| Backend          | Node.js, Express.js, TypeScript                        |
| Database         | MongoDB (Mongoose)                                     |
| AI Service       | Google Gemini API                                      |
| Authentication   | JWT (JSON Web Tokens)                                  |
| State Management | React Hooks / Context API                              |
| Deployment       | Vercel (Frontend), Render / Railway / Heroku (Backend) |

---

## ⚙️ Getting Started

Follow these steps to run the project locally.

---

### ✅ Prerequisites

* Node.js **v18 or later**
* npm or yarn
* MongoDB (Local or MongoDB Atlas)
* Google Gemini API Key

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Ramneek07/Thumblify.git
cd Thumblify
```

---

### 2️⃣ Setup Backend (Server)

```bash
cd server
npm install
```

Create a **.env** file inside the `server` directory:

```env
# Server Configuration
PORT=3000
MONGO_URI="mongodb+srv://Ramneek:<db_password>@cluster0.r8q1qvc.mongodb.net/?appName=Cluster0"
JWT_SECRET="your_jwt_secret"

# Google Gemini API
GEMINI_API_KEY="AIzaSyAzy4oiltj7s0fh-vSTquf8kWfD1QPEBTc"
```

Start the backend server:

```bash
npm run dev
```

Backend will run at:

```
http://localhost:3000
```

---

### 3️⃣ Setup Frontend (Client)

```bash
cd ../client
npm install
```

Create a **.env.local** file inside the `client` directory:

```env
VITE_API_BASE_URL="http://localhost:5173"
```

Start the frontend:

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 🚀 Deployment

### Frontend

* Deploy using **Vercel**
* Add environment variables in platform settings

### Backend

* Deploy on **Render**, **Railway**, or **Heroku**
* Ensure MongoDB & Gemini API keys are configured

---

## 📁 Project Structure

```
AI-Thumbnail-Generator/
├── client/        # React + TypeScript frontend
├── server/        # Node.js + Express + TypeScript backend
├── README.md
└── package.json
```

---

## 🤝 Contributing

Contributions are welcome and appreciated! 🚀

1. Fork the repository
2. Create your feature branch

   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes

   ```bash
   git commit -m "Add AmazingFeature"
   ```
4. Push to the branch

   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License**.
See the `LICENSE` file for details.
