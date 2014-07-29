'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(morgan('dev')); //request logging
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/about', function(req, res){
  res.render('about');
});

app.get('/discography', function(req, res){
  res.render('discography');
});

app.get('/tour', function(req, res){
  res.render('tourdates');
});

app.listen(3001, function(){
  console.log('Yeezy is in the house...');
});

