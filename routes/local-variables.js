let rooms = [
    {
        roomId : "r1",
        roomName : "ConferenceRoom",
        seats : "100",
        amenities : ["AC","Projector", "Water Dispenser"],
        pricePerHour : "1500",
        bookedStatus : "true"
    },
    {
        roomId : "r2",
        roomName : "MeetingRoom",
        seats : "50",
        amenities : ["AC","Projector", "Water Dispenser"],
        pricePerHour : "3000",
        bookedStatus : "true"
    },
]

let bookings = [
    {
        bookingId : "b1",
        roomId : "r1",
        customerName : "Arul",
        bookingDate : "17-09-2024",
        startTime : "9",
        endTime : "17"
    },
    {
        bookingId : "b2",
        roomId : "r2",
        customerName : "Mozhli",
        bookingDate : "17-09-2024",
        startTime : "9",
        endTime : "17"
    },
    {
        bookingId : "b3",
        roomId : "r1",
        customerName : "Arul",
        bookingDate : "17-09-2024",
        startTime : "18",
        endTime : "20"
    },
]

// let bookings = [
//     {
//         roomId : "r1",
//         bookingDetails : [
//             {
//                 bookingDate : "17-Sep-2024",
//                 bookingTime : [
//                     {
//                         customerID: "c1",
//                         customerName:"Arul",
//                         startTime:"06",
//                         endTime:"17"
//                     },
//                     {
//                         customerID: "c2",
//                         customerName:"Varman",
//                         startTime:"18",
//                         endTime:"20"
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         roomId : "r2",
//         bookingDetails : [
//             {
//                 bookingDate : "17-Sep-2024",
//                 bookingTime : [
//                     {
//                         customerID: "c1",
//                         customerName:"Arul",
//                         startTime:"06",
//                         endTime:"17"
//                     },
//                     {
//                         customerID: "c2",
//                         customerName:"Varman",
//                         startTime:"18",
//                         endTime:"20"
//                     }
//                 ]
//             }
//         ]
//     }
// ]

function setRooms(roomsArray){
    rooms = roomsArray;
}

function setBookings(bookingsArray){
    bookings = bookingsArray;
}

export {rooms,bookings, setBookings,setRooms}