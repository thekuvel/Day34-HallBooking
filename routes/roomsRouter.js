import express from "express";

import { rooms,bookings,setRooms,setBookings } from "./local-variables.js";


const roomsRouter = express.Router();

roomsRouter.get("/", (req,res)=>{
    res.send(rooms);
})

roomsRouter.post("/", (req,res)=>{
    let {body} = req;
    rooms.push({...body})
    res.send(`Added a new room: ${body.roomName}`);
})

roomsRouter.put("/", (req,res)=>{
    let {body} = req;
    rooms.filter((room,index)=>{
        if(body.roomId === room.roomId){
            rooms[index] = body
        }
    })
    res.send(`Rooms: ${body.roomName} replaced successfully.`)
})

roomsRouter.delete("/:id", (req,res)=>{
    let {id} = req.params;

    setRooms(rooms.filter((room) => room.roomId !== id));
    
    res.send(`Deleted Room id ${id}`);
})

export default roomsRouter;