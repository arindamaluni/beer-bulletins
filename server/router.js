'use strict';

const router = require('express').Router();
const user = require('./controllers/users');
const beer = require('./controllers/beers');

router.get('/beers', beer.getBeers);
router.post('/beers', beer.postBeers);

//create routes here.

//const message = require 'controller'
//router routes: router.get('/messages', message.getAll)


module.exports = router;
