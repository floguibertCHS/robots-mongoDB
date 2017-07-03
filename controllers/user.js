const express = require('express');
const router = express.Router();


// router.get('/:id', function(request, response) {
//   //console logging the route paramters
//   console.log(request.params)
//   var parameterId = request.params.id;
//       var singleUser = data.users.find(function(user){
//        if (user.id == parameterId) {
//           return true
//       } 
//     })
//  response.render('user', singleUser);
// });

// const MongoClient = require('mongodb').MongoClient, assert = require('assert');
// const url = 'mongodb://localhost:27017/robots';

// router.get('/:id', function(request, response) {
//   MongoClient.connect(url, function(err, db) {
//       db.collection('robots').find({id: parseInt(request.params.id)}).toArray(function(err, docs) {
//         console.log(docs);
//         response.render('profiles', docs[0]);
//       });
//   });
// });
//   module.exports = router;

// var robots = database.collection('robots').find({'id':parameterId});
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var url = 'mongodb://localhost:27017/robots';

router.get('/:id', function(request,response){
    MongoClient.connect(url, async function(error, database){
        var robot = await database.collection('robots').findOne({"id":parseInt(request.params.id)});
            response.render('user', {'users':robot});
            database.close();
        });
    });
    //     response.render('index', {"robots": docs})
    // })
   
module.exports = router;