var express = require('express');
var User = require('../model').User;
var Privilege = require('../model').Privilege;
var router = express.Router();

router.get('/', function(req, res){
    console.log('getting all users');
    User.findAll({
        include: [{model: Privilege, as: 'Privileges'}]
    }).then(users => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.json(users);
    });
});

router.get('/:id', function(req, res){
    console.log('getting one user');
    User.findAll({  
            include: [{model: Privilege, as: 'Privileges'}]         
            ,where: {
                id: req.params.id
            }
        })
      .then(user => {
        console.log(user);
        res.json(user);
    });
});

router.post('/', function(req, res){
    User.create({ 
        title: req.body.title,
        author: req.body.author, 
        category: req.body.category 
    }).then(user => {
        console.log(user.get({
          plain: true
        }));
        res.send(user);
    });
});

router.put('/:id', function(req, res){
    User.update({
        title: req.body.title,
        author: req.body.author,
        category: req.body.category
    },{ 
        where: { id: req.params.id } 
    }).then(result => {
        res.status(200).json(result);
    });
});

router.delete('/:id', function(req, res){
    User.destroy({ 
        where: { id: req.params.id } 
    }).then(result => {
        res.status(200).json(result);
    });
});

module.exports = router;