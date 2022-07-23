let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config();
let port =process.env.PORT ||9870;
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl =process.env.MongoLiveUrl;
let db;

app.get('/',(req,res)=>{
    res.send('Hiii From Express')
})

app.get('/category',(req,res) => {
    db.collection('category').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

// connection with db
MongoClient.connect(mongoUrl,(err,client) =>{
    if(err) console.log(`Error While Connecting`);
    db = client.db('Flipkart');
    app.listen(port,() => {
        console.log(`listening on port ${port}`)
    })
})