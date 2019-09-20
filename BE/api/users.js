var express = require('express');
var User = require('../model').User;
var Privilege = require('../model').Privilege;
var router = express.Router();

router.get('/', function(req, res){
    console.log('getting all users');
    User.findAll({
        include: [{model: Privilege, as: 'Privileges'}]
    }).then(users => {
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

router.post('/add', function(req, res){
    User.create({ 
        name: req.body.name,
        description: req.body.description, 
    }).then(user => {
        console.log(user.get({
          plain: true
        }));
        res.send(user);
    });
});

router.put('/:id', function(req, res){
    User.update({
        name: req.body.name,
        description: req.body.description,
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