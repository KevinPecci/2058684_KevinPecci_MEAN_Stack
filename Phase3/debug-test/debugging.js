let readline= require("readline-sync");
let fs = require("fs");
//inputs for variables
let firstName = readline.question("Enter your first name: ");
let lastName = readline.question("Enter your last name: ");
let gender = readline.question("Enter your gender: ")
let emailId = readline.questionEMail("Enter your email id: ")
var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
let people = [];
var data = fs.readFileSync("people.json");
let peopleString = data.toString();
let peopleJSON = JSON.parse(peopleString);
debugger;
peopleJSON.forEach(person => {
    people.push(person);
});

let person = {fName:firstName,lName:lastName,gender:gender,email:emailId,date:datetime};
people.push(person);
let resultString = JSON.stringify(people);
debugger;
fs.writeFileSync("people.json",resultString);
console.log("Data stored in file")