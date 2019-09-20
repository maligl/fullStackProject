var express = require('express');
var Privilege = require('../model').Privilege;
var User = require('../model').User;
var router = express.Router();

router.get('/', function(req, res){
    console.log('getting all users');
    Privilege.findAll().then(users => {
        res.json(users);
    });
});

module.exports = router;