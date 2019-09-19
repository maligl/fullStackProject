var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var models = require("./model");
// routes
var users = require('./api/users');

const config = require("./config.json")
const environment = process.env.NODE_ENV || 'development';

//Sync Database
models.sequelize.sync().then(function () {
    console.log('connected to database')
}).catch(function (err) {
    console.log(err)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// register routes
app.use('/users', users);

// index path
app.get('/', function (req, res) {
    console.log('app listening on port: ' + config.node_port);
    res.send('tes express nodejs mysql')
});

app.listen(port, function () {
    console.log('app listening on port: ' + config.node_port);
});