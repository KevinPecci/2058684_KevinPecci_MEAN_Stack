const { Socket } = require("dgram");
let net = require("net");
let readline = require("readline");


let server = net.createServer();

let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

server.on("connection", (socket)=> {
    console.log("Client connected.")


    socket.on("data",(msg)=> {
        console.log(msg.toString());
    })

    socket.write("Hello Client, You successfully connected chatting application")

    r1.on("line",(input)=> {
        socket.write(`Server Say: ${input}`)
    })
})

server.listen(9090,()=>console.log("Server running on port number 9090."));