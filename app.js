const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const userController = require('./controllers/user');
const homeController = require('./controllers/home');
var mongo = require('mongodb');
// var db = robots('localhost:27017/robots');
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

app.use(express.static('public'))
app.use(userController);
app.use(homeController);

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

//////////////this works //////



  // var id = request.body.id;

  // card.name = request.body.name;

//   response.send(response.params.users.id);
  // response.render('user',card);

 
// app.get('/:id', function (request, response) {
//     var users = data.users;
//     var id = request.params.id;
//     var data = users.find(function(user){

//        if (user.id.toString() === id) {
//           return true
//       } 
//     })
// console.log(data, 'this one')

//  response.render('robots.mustache', robot);
app.listen(2000);
