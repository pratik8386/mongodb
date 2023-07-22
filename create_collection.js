var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = "mongodb://0.0.0.0/reactnode4";
const DATABASENAME = 'reactnode4';
MongoClient.connect(url,function(error,database){
    if(error!=null)
    {
        console.log('error in connection');
        console.log(error.errmsg);
    }
    else 
    {
       var db = database.db(DATABASENAME);
       db.createCollection('notepad',function(error,result){
            if(error!=null)
            {
                console.log('error in creating collection');
                console.log(error.errmsg);
            }
            else 
            {
                console.log('collection created successfully....');
                database.close();
            }
       });
    }
});