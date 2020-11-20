'use strict';

const router = require('express').Router();
// const user = require('./controllers/beers');
const beer = require('./controllers/beers');

router.get('/beers/search', beer.getBeersByName);
router.get('/beers/:id', beer.getBeerById);
router.get('/', (req, res) => res.status(200).send('OK'));

module.exports = router;
