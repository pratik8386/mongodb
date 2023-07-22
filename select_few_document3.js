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
        const condition = {
            $and: [
              {
                name: {
                    $eq:"the book of dog",
                },
                author:{
                    $eq:"hemali sodhi",
                }
              },
            ],
        }
    var fields_to_skip = {_id:0};
    db.collection('books').find(condition,{projection:fields_to_skip}).toArray(function(error,result){
        if(error!=null)
          console.log(error.errmsg);
        else
          console.log(result);
    })
  }
})