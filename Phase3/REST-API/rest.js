const { request, response } = require("express");
var bodyParser = require('body-parser')
let express = require("express");

let app = express();
app.use(bodyParser.json());
let emp = {id:100,name:"Raj",age:21}
let employees = [
    {id:100,name:"Raj",age:21},
    {id:101,name:"Raju",age:24},
    {id:102,name:"Rajesh",age:27},
    {id:103,name:"Ravi",age:20}
]

http://localhost:9090/storeEmployee
app.post("/storeEmployee",(request,response)=> {
    let employee = request.body;
    console.log(employee)
    response.send("employee data store")
})

//can pass partial object
app.put("/updateEmployee",(request,response)=> {
    let employee = request.body;
    console.log(employee)
    response.send("employee data store")
})

app.get("/sayPlainText",(request,response)=> {
    response.send("Welcome to REST API in plain text format");[]
})

app.get("/sayJSON",(request,response) => {
    response.json({"msg":"Welcome to REST API in Json Format"});
})

app.get("/empInfo",(request,response)=> {
    response.json(emp);
})

app.get("/employeesInfo",(request,response)=> {
    response.json(employees);
})

//query param with single value
//http://localhost:9090/singleQueryParam?name=Raj
app.get("/singleQueryParam",(request,response)=> {
    let name = request.query.name;
    response.send("Welcome user "+name)
})

//path param with single value
//http://localhost:9090/singlePathParam/Raju
app.get("/singlePathParam/:name",(request,response)=> {
    let user = request.params.name;
    response.send("Welcome user path param "+user)
})

//path param with multiple value
//http://localhost:9090/multiPathParam/100/Raju/12000
app.get("/multiPathParam/:id/:name/:salary",(request,response)=> {
    let id = request.params.id;
    let name = request.params.name;
    let salary = request.params.salary;

    response.send("Welcome user with multiple path param. User: "+name+" ID: "+id+" Salary: "+salary);
})

app.listen(9090,()=>console.log("Server is running on port number 9090"))