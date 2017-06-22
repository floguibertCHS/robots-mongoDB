const express = require('express');
const mustacheExpress = require('mustache-express');
const data = require("./data.js");
const app = express();

app.use(express.static('public'))
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

//////////////this works //////
app.get('/', function(request,response){
   response.render('index',data);
})

app.get('/:id', function(request, response) {
  //console logging the route paramters
  console.log(request.params)
  //storing the id parameter value into a variable
  var parameterId = request.params.id;
      //using find() method to loop through users array of user data objets.
      // for(var i = 0; i < data.users.length; i++){
      //   var singleUser = data.users[i];
      //   if(singlueUser.id === parameterID){
      //     return;
      //   }
      // }
      var singleUser = data.users.find(function(user){
        //find method takes in a callback function
        //this callback function executes through the length of the array
        //user is our single user object from our users array
        //our if statement is checking to see if our parameter ID matches any of our
        //user IDs.

       if (user.id == parameterId) {
         //if the user Id matches our parameter ID we return true in our callback
         //find will return that user object 
          return true
      } 
    })

 response.render('user', singleUser);
});
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
