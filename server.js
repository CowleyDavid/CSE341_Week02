const express = require('express');
const bodyParser =require('body-parser');
//const as mongo db instead of connectDB
const mongodb = require('./DB/connection')
const port = process.env.port;
const app = express();

app
    .use(bodyParser.json())
    .use((req,res,next) => {
        res.setHeader('access-controll-allow-origin','*');
        next();
})
    .use('/', require('./routes'));

mongodb.initDb((err, mongodb) =>{
    if (err){
        console.log(err);
    }else{
        app.listen(port);
        console.log(`connected to db and listening on ${port}`);
        
    }
});


