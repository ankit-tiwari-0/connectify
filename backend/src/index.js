import express from "express"
import authrouter from "./routes/auth.route.js";
import messagerouter from "./routes/message.route.js";
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js";
import cookie from "cookie-parser"
import cors from "cors"


dotenv.config()


const app = express()

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use(cookie())

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use("/api/auth", authrouter)
app.use("/api/messages", messagerouter)


app.listen(3000, () =>{
    console.log("server is running on port 3000");
    connectDB()
})