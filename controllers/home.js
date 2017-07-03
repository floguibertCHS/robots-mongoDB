const express = require('express');
const router = express.Router();

// var mongo = require('mongodb');
// var robots = require('robots');
// var db = robots('localhost:27017/robots');

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var url = 'mongodb://localhost:27017/robots';

router.get('/', function(request,response){
    MongoClient.connect(url, async function(error, database){
        var robot = await database.collection('robots').find({}).toArray();
            response.render('index', {'users':robot});
            database.close();
        });
    });
    //     response.render('index', {"robots": docs})
    // })
   
module.exports = router;
