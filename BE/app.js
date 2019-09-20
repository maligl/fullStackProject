var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var models = require("./model");
var cors = require('cors');

// routes
var users = require('./api/users');
var privileges = require('./api/privileges');

//configurations
const config = require("./config.json")
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];
 

//Sync Database
models.sequelize.sync({ force: false }).then(function () {
    console.log('connected to database')
}).catch(function (err) {
    console.log(err)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.options('*', cors())

// register routes
app.use('/users', users);
app.use('/privileges', privileges);

// index path
app.get('/', function (req, res) {
    console.log('app listening on port: ' + environmentConfig.node_port);
    res.send('Hello to the users api, please enter the needed path')
});

app.listen(environmentConfig.node_port, function () {
    console.log('app listening on port: ' + environmentConfig.node_port);
});