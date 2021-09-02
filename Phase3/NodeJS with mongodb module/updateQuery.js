let mongoClient = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";

mongoClient.connect(url,(err,client)=> {
    if(!err){
        console.log("Connected");
        let db = client.db("tcsmean");
        // City update using_id
        db.collection("Sample").updateOne({_id:3},{$set:{name:"Pahesh"}},(err,result)=> {
            if(!err){
                if(result.modifiedCount>0){
                    console.log("Record updated");
                }else {
                    console.log("Record not found");
                }
            }else {
                console.log(err);
            }
            client.close();
        })

    }else {
        console.log(err);
    }
});