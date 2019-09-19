var express = require('express');
var Privilege = require('../model').Privilege;
var User = require('../model').User;
var router = express.Router();

router.get('/', function(req, res){
    console.log('getting all users');
    Privilege.findAll().then(users => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.json(users);
    });
});

router.get('/:id', function(req, res){
    console.log('getting one user');
    // Privilege.findAll ({            
    //     include: [{model: [User]}]
    //     }).then(user => {
    //         console.log(user);
    //         res.json(user);
    //     });
    User.findAll({  
            include: [{model: Privilege, as: 'Privileges'}]
           // include: [{ all: true }]
         
            ,where: {
                id: req.params.id
            }
        })
      .then(user => {
        console.log(user);
        res.json(user);
    });
    /* another ways to do it
    User.findOne({ where: {id: req.params.id} }).success(user => {
        console.log(user);
        res.json(user);
    }).error(err => {
        res.send('error has occured');
    });
    */
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