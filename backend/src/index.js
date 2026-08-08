import express from "express"
import authrouter from "./routes/auth.route.js";
import messagerouter from "./routes/message.route.js";
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js";
import cookie from "cookie-parser"
import cors from "cors"
import { app, server } from "./lib/socket.js";
import path from "path"


dotenv.config()

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use(cookie())

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use("/api/auth", authrouter)
app.use("/api/messages", messagerouter)


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*splat}", (req, res) => {
    res.sendFile(
        path.join(__dirname, "../frontend", "dist", "index.html")
    );
});
}

server.listen(PORT, () =>{
    console.log("server is running on port" + PORT);
    connectDB()
})