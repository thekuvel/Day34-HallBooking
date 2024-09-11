import express from "express";

import { rooms, bookings, setBookings } from "./local-variables.js";

const bookingsRouter = express.Router();

bookingsRouter.get("/", (req,res)=>{

    let query = req.query;

    if(query.cName){
        
        let data = bookings.filter( book => book.customerName == query.cName)
        let count = data.length.toString();
        let response = [{CustomerName: query.cName,TotalCount : count},...data]
        res.send(response)

    }else{
        let data = bookings.map((book,index)=>{
            let id = book.roomId;
            let singleRoom = rooms.filter(room=>room.roomId == id)
            book = {...book, roomName : singleRoom[0].roomName, bookedStatus : singleRoom[0].bookedStatus}
            return book;
        })
    
        res.send(data);
    }
    

    
})

bookingsRouter.post("/", (req,res)=>{
    let body = req.body;
    let alreadyBooked = false;

    bookings.filter((book)=>{
        if(book.roomId == body.roomId && book.bookingDate == body.bookingDate && book.startTime >= body.startTime && book.startTime <= body.endTime){
            alreadyBooked = true;
        }
    })

    if(alreadyBooked){
        res.send("Already Booked. Try with differnt date and time.")
        alreadyBooked = false;
    }else{
        bookings.push({...body})
        res.send(`Added Booking details ${body.bookingId}`)
    }

    
})

export default bookingsRouter