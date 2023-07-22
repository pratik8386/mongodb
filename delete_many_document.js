var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
const DATABASENAME = 'reactnode4';
var url = `mongodb://0.0.0.0/{DATABASEANAME}`
MongoClient.connect(url,function(error,database){
    if(error!=null)
    {
        console.log('error in connection');
        console.log(error.errmsg);
    }
    else
    {
        var db = database.db(DATABASENAME);
        var condition = {name : 'the book of dog'};
        db.collection('books').deleteMany(condition,function(error,result){
            if(error)
            {
                console.log('document can not be deleted');
                console.log(error.errmsg);
            }
            else
            {
                console.log('document deleted successfully');
            }
        })
    }
})