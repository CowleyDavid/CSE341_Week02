const mongodb = require('../DB/connection');
const ObjectId = require('mongodb').ObjectId;

//I need this to pull info from the data base? 

const getAll = async(req, res, next)=>{
    const result = await mongodb.getDb().db('contacts').collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('content-type', 'application/json');
        res.status(200).json(lists);
    });
};

const getSingle = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
    .getDb()
    .db('contacts')
    .collection('contacts')
    .find({_id: userId});
    result.toArray().then((lists)=> {
        res.setHeader('content-type', 'application/json')
        res.status(200).json(lists[0]);
    });
};

module.exports = {getAll, getSingle};
