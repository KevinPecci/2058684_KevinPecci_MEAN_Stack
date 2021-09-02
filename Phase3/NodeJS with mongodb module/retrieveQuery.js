let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";

mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("Connected");
        let db = client.db("tcsmean");
        let cursor = db.collection("Sample").find({salary:{$lt:48000}});
        cursor.forEach(doc=> {
            console.log("Name "+doc.name+" Salary "+doc.salary);
            client.close();
        })

    }else {
        console.log(err);
    }
});