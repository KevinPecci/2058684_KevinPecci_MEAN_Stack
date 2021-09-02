let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";

mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("Connected");
        let db = client.db("tcsmean");
        let employees = [
            {_id:3,name:"Mahesh",salary:43000,deptId:100,city:"Dehli"},
            {_id:4,name:"Nahesh",salary:49000,deptId:200,city:"Bangalore"},
            {_id:5,name:"Kahesh",salary:36000,deptId:300,city:"Mumbai"}

        ]
        db.collection("Sample").insertMany(employees,(err,result)=> {
            if(!err){
                console.log("Record inserted successfully")
                console.log(result);
            }else {
                console.log(err);
            }
            client.close();
        })
    }else {
        console.log(err);
    }
});