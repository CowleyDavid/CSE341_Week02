const mongoose =require('mongoose');
const dotenv = require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

let _db;

//the URI is now stored in the ENV file! this is the connection info for mongodb
const URI = process.env.uri;

const initDb = (callback) =>{
    //so a statement and a return for if the DB is already initialized
    if(_db){
        console.log('db is already initialized!');
        return callback(null, _db);
    }
    MongoClient.connect(process.env.uri)
        .then((client) =>{
            _db = client;
            callback(null, _db);
        })
        //a catch in case of errors
        .catch((err) =>{
            callback(err);
        });
};
const getDb = () =>{
    if (!_db){
        throw error ('db not initialized');
    }
    return _db;
};

module.exports ={
    initDb,
    getDb
};


//this is week1 stuff just putting it in comments
/*const connectDB = async()=>{
    await mongoose.connect(URI);
    console.log('db connected...!');
    console.log('this is hard, but I can do it.')
}

module.exports = connectDB;
*/