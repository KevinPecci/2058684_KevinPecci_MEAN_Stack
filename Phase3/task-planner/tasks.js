let readline= require("readline-sync");
//var readlineSync = require('readline-sync');
let fs = require("fs");
let http = require("http");
let url = require("url");
const { response } = require("express");
const { table } = require("console");
const { json } = require("body-parser");

msg = "";
displayTable = ""

let indexPage = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Tasks</title>
                </head>
                <body>
                <h2>Add task</h2>
                <form action="register">
                    <label>Emp ID: </label>
                    <input type="text" name="empID"/><br/>
                    <label>Task ID: </label>
                    <input type="text" name="taskID"/><br/>
                    <label>Task Name: </label>
                    <input type="text" name="taskName"/><br/>
                    <label>Deadline: </label>
                    <input type="date" name="deadline"/><br/>
                    <input type="submit" value="Add Task"/>
                    <input type="reset" value="Reset"/>
                </form>
                <br><hr>
                <h2>Delete task</h2>
                <form action="delete">
                    <label>Task ID: </label>
                    <input type="text" name="deleteID"/><br/>
                    <input type="submit" value="Delete"/>
                    <input type="reset" value="Reset"/>
                </form>
                <br><hr>
                </body>
            </html>
`

function makeTask(eID,tID,tName, dl){
    let empID = eID;
    let taskID = tID;
    let taskName = tName;
    let deadline = dl;
    tasks = [];
    
    var data = fs.readFileSync("tasks.json");
    let tasksString = data.toString();
    let tasksJSON = JSON.parse(tasksString);
    console.log("task list: "+tasksString);
    if (tasksString != ""){
        tasksJSON.forEach(task => {
            tasks.push(task);
        });
    }
    let task = {eID:empID,tID:taskID,tName:taskName,dl:deadline};
    let result = tasksJSON.find(t=>t.tID == task.tID); //check if an existing task in the json has the same ID as the new one
    if (result == undefined){
        tasks.push(task);
        let resultString = JSON.stringify(tasks);
        console.log("Tasks JSON: "+resultString);
        fs.writeFileSync("tasks.json",resultString);
        console.log("Data stored in file");
        msg = "Task Created";
    }
    else{
        msg = "Task ID already in use";
    }
}

function makeTable(){
    var data = fs.readFileSync("tasks.json");
    let tasksString = data.toString();
    let tasksJSON = JSON.parse(tasksString);
    let tableContent = "";
    startTable = `<table border=1><tr><th>Emp. ID</th><th>Task ID</th><th>Task</th><th>Date</th></tr>`;
    tasksJSON.forEach(task =>{
        tableContent += `<tr><td>${task.eID}</td><td>${task.tID}</td><td>${task.tName}</td><td>${task.dl}</td></tr>`
    })
    endTable = `</table>`;
    return startTable+tableContent+endTable;

}

let server = http.createServer((request,response)=> {
    let urlInfo = url.parse(request.url,true);
    //console.log(urlInfo)
    //console.log("path "+urlInfo.path)   // path :path name with query details 
    //console.log("pathName"+urlInfo.pathname)    // pathname : only path 
    if(urlInfo.path != "/favicon.ico"){
        if(urlInfo.pathname == "/register"){
            let task = urlInfo.query;

            makeTask(task.empID,task.taskID,task.taskName,task.deadline);
            //maybe pass whole task variable instead of 4 individual things
            //response.write("Task Made");
        }
        else if(urlInfo.pathname == "/delete"){
            let task = urlInfo.query;
            var data = fs.readFileSync("tasks.json");
            let tasksString = data.toString();
            let tasksJSON = JSON.parse(tasksString);
            //console.log("task list: "+tasksString);
            let result = tasksJSON.find(t=>t.tID == task.deleteID);
            if(result != undefined){
                // console.log(JSON.stringify(result));
                // resultString = tasksString.replace(JSON.stringify(result),'');
                deleteIndex = tasksJSON.indexOf(JSON.stringify(result));
                tasksJSON.splice(deleteIndex,1);
                resultString = JSON.stringify(tasksJSON);
                fs.writeFileSync("tasks.json",resultString);
                msg = "Task Deleted";
            }
            else{
                msg = "Task not found";
            }
        }
        response.write(indexPage);
        response.write(msg);
        displayTable = makeTable();
        response.write(displayTable);
    }
    response.end();
})

server.listen(9090,()=>console.log("Server running on port number 9090"))