let net = require("net");

let client = net.createConnection(9090,"localhost",()=> {

    client.write("Hello Server, I am Client......")
})

client.on("data",(msg)=> {
    console.log(msg.toString())
})