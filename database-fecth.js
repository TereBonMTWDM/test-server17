/*
const MongoClient = require('mongodb').MongoClient;
 
MongoClient.connect('mongodb://dba-tere:T3r3Orozco@132.247.172.19:80/QA_escolares', {
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB');
 
    const db = client.db('QA_escolares');
    db.collection('test').find().toArray().then((docs) => {
        console.log('Tests:');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch TESTS', err);
    });
 
    client.close();
});
*/