var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
const DATABASENAME = 'reactnode4';
var url = `mongodb://0.0.0.0/{DATABASENAME}`;
MongoClient.connect(url,function(error,database){
    if(error!=null)
    {
        console.log('error in connection');
        console.log(error.errmsg);
    }
    else
    {
        var db = database.db(DATABASENAME);
        var condition = {name:'hyperlearning'};
        var newvalue = {$set : {name:'The life changing habit',price:499}};
          db.collection('books').updateOne(condition,newvalue,function(error,result){
            if(error)
            {
                console.log('document can not be updated');
                console.log(error.errmsg);
            }
            else
            {
                console.log('documents updated successfully');
            }
          });
    }
});
