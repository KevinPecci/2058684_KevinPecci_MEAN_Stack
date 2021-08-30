const { Socket } = require("dgram");
let net = require("net");

let server = net.createServer();


server.on("connection", (socket)=> {
    console.log("Client connected.")


    socket.on("data",(msg)=> {
        console.log(msg.toString());
    })

    socket.write("Hello Client, You successfully connected chatting application")
})




server.listen(9090,()=>console.log("Server running on port number 9090."));