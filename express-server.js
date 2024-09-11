import express from "express"

import roomsRouter from "./routes/roomsRouter.js"
import bookingsRouter from "./routes/bookingsRouter.js";

const server = express();

server.use(express.json());

server.get("/", (req,res)=>{
    res.send("Hi use /rooms and /bookings");
})

server.use("/rooms", roomsRouter)
server.use("/bookings", bookingsRouter)

// Server Listening
const port = 8000;
server.listen(port,()=>{
    console.log(Date().toString(),"Server running on port: ",port)
})