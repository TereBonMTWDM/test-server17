const MongoClient = require('mongodb').MongoClient;
 
MongoClient.connect('mongodb://dba-tere:T3r3Orozco@132.247.172.19:80/QA_escolares',{ 
    useNewUrlParse:true
}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB');
 
    const db = client.db('QA_escolares');
    db.collection('test').insertOne({
        ticker: 'AAPL',
        inPortfolio: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert stock', err);
        }
 
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});