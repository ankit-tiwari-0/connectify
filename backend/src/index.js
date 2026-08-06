import express from "express"
import authrouter from "./routes/auth.route.js";
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js";
import cookie from "cookie-parser"


dotenv.config()



const app = express()
app.use(express.json())
app.use(cookie())

app.use("/api/auth", authrouter)


app.listen(3000, () =>{
    console.log("server is running on port 3000");
    connectDB()
})