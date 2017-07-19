const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const userController = require('./controllers/user');
const homeController = require('./controllers/home');

var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;

app.use(express.static('public'))


app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(homeController);
app.use(userController);

app.listen(2000);
