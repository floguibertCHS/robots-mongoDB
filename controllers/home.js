const express = require('express');
const router = express.Router();
var mongo = require('mongodb');
const bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/robots';

router.get('/', function(request,response){
    MongoClient.connect(url, async function(error, database){
        let robot = await database.collection('robots').find({}).toArray();
            response.render('index', {users:robot} );
                database.close();
        })
    });
router.get('/unemployed', (request, response)=>{
    MongoClient.connect(url, async (error, database)=>{
        let robot = await database.collection('robots').find( {job: null} ).toArray();
            response.render('index', {users: robot});
                database.close();
    })
});

router.get('/employed', function (request, response){
    MongoClient.connect(url, async function (error, database){
        let robot = await database.collection('robots').find( {company: {$ne:null} } ).toArray();
            response.render('index', {users: robot });
                database.close();

    })
});
   
module.exports = router;
