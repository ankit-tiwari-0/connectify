import { Server} from "socket.io"
import http from "http"
import express from "express"



const app = express()
const serverr = http.createServer(app)

const io = new Server(serverr, {
    cors: {
        origin: ["http://localhost:5173"]
    }
})

io.on("connection", (socket)=>{
    console.log("A user connected", socket.id);

    socket.on("disconnect", () =>{
        console.log("A user disco", socket.id);
        
    })
    
})

export { io, app, serverr}