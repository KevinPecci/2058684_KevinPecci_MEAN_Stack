//load the module
let express = require("express");

//creating the reference of express module
let app = express();

app.get("/",(req,res)=>{
    res.send("welcome to express js simple module")
})
app.get("/aboutus",(req,res)=>{
    res.send("about us")
})
app.get("/contactus",(req,res)=>{
    res.send("contact us")
})
app.get("/index",(req,res)=>{
    //res.sendFile("C:\\Users\\s1191\\Documents\\tcs\\2058684_KevinPecci_MEAN_Stack\\Phase3\\class-examples\\index.html");
    //res.send(__dirname);
    res.sendFile(__dirname+"\\index.html");
})







app.listen(9090,()=>console.log("Server runing on port 9090"));