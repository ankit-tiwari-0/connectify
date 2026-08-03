import express from "express"
import authrouter from "./routes/auth.route.js";



const app = express()
app.use("/api/auth", authrouter)


app.listen(3000, () =>{
    console.log("server is running on port 3000");
    
})