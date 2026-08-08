<img width="1911" height="1032" alt="image" src="https://github.com/user-attachments/assets/36434584-be3f-4e35-a189-fb4ce4e1f8e6" />

# 💬 Connectify

Connectify is a real-time chat application built with the MERN stack.  
It supports authentication, real-time messaging, online user status, profile picture uploads, and theme customization.

## 🚀 Live Demo

🔗 https://connectify-gpld.onrender.com

## ✨ Highlights

- 🌟 **Tech Stack:** MongoDB + Express.js + React.js + Node.js
- ⚡ **Real-time messaging** with Socket.IO
- 🔐 **Authentication & Authorization** using JWT
- 👤 **Online user status**
- 🖼️ **Profile picture and image uploads** using ImageKit
- 🎨 **Multiple themes** using TailwindCSS + DaisyUI
- 🐻 **Global state management** with Zustand
- 🍪 **Cookie-based authentication**
- 🛡️ **Protected routes** for authenticated users
- 🐞 **Error handling** on both the server and client
- 📱 **Responsive chat interface**
- 🚀 **Production deployment** using Render
- ⏳ **Message expiration** with automatic database cleanup
- 💻 **REST APIs** for authentication and messaging

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- TailwindCSS
- DaisyUI
- Zustand
- Axios
- Socket.IO Client
- Lucide React

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT
- bcryptjs
- Cookie Parser
- CORS

### Services

- MongoDB Atlas
- ImageKit
- Render

## 📁 Project Structure

```text
connectify/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── lib/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── seeds/
│   │   └── index.js
│   │
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── lib/
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── LICENSE
├── package.json
└── README.md


⚙️ Environment Variables

MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

NODE_ENV=

PORT=3000

