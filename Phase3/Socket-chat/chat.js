// load the express module 
let express = require("express");

// create the reference of epxress module 
let app = express();

// load the http module and connect to express module with Server property
let http = require("http").Server(app);

// load the socket.io module and connect http module 
// with IIFE features 
let io = require('socket.io')(http);

let randomPkmn = ["Bulbasaur","Squirtle","Charmander","Pikachu","Mewtwo"]

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"\\index.html");
})

io.on("connection",(socket)=> {
    console.log("Client connected");
    // receive the message from client application 
    socket.on("obj",(msg)=> {
        console.log(msg);
    })
    socket.on("name",(msg)=> {
        console.log("Hello, " + msg);
    })
    socket.on("message",(msg)=> {
        console.log("Recieved message: " + msg);
        //set random message and send to client
        let randomNumber = Math.floor(Math.random()*randomPkmn.length);
        socket.emit("pkmn", randomPkmn[randomNumber]);
    })

})


// please run the server using http module not express module 
http.listen(9090,()=>console.log("Server running on port number 9090"));