let net = require("net");
let readline = require("readline");

let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let client = net.createConnection(9090,"localhost",()=> {

    client.write("Hello Server, I am Client......")


    client.on("data",(msg)=> {
        console.log(msg.toString())
    })

    r1.on("line",(input)=> {
        client.write(`Client Say: ${input}`);
    })
})


