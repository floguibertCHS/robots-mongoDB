const express = require('express');
const router = express.Router();

var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/robots';

router.get('/:id', function(request,response){
    MongoClient.connect(url, async function(error, database){
        var robot = await database.collection('robots').findOne({"id":parseInt(request.params.id)});
            response.render('user', {'users':robot});
                database.close();
        });
    });
   
   
module.exports = router;