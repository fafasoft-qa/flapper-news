var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('passport');

var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/news');

require('./models/Posts');
require('./models/Comments');
require('./models/Users');
require('./config/passport');

var routes = require('./routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

app.use('/', routes);

 module.exports = app;
