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
        var document = [
            {
                name:'hyperlearning',
                author:'some author',
                price: 1500,
                pages: 1200
            },
            {   
                name:'the book of dog',
                author:'hemali sodhi',
                price: 199,
                pages: 120
            },
            {
                movie:'som movie',
                startcast:['abc','bcd','ced'],
                ticket: 199,
            },
            {
                place:"the easylearn academy",
                city : 'bhavnagar',
                pincode : 364001,
            }
        ];
           db.collection('books').insertMany(document,function(error,result){
               if(error)
               {
                  console.log('document can not be inserted');
                  console.log(error.errmsg);
               }
               else
               {
                console.log('document inserted successfully');
               }
           });
    }
});