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
        var document = {
            name:'hyperlearning',
            author:'some author',
            price: 1500,
            pages: 1200
        };
        db.collection('books').insertOne(document,function(error,result){
            if(error)
            {
                console.log('document can not be inserted');
                console.log(error,errmsg);
            }
            else
            {
                console.log('document inserted successfully');
            }
        });
    }
});