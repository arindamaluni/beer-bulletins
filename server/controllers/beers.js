const db = require('../models');

exports.getBeers = async (req, res) => {
  try {
    const beers = await db.Beer.findAll();
    res.send(beers);
    res.status();
  } catch (e) {
    console.log('e', e); // eslint-disable-line no-console
    res.status(500);
  }
};

exports.postBeers = async (req, res) => {
  try {
    const beersBody = req.body;
    const newBeers = await db.Beer.bulkCreate(beersBody, { returning: true });
    res.status(201);
    res.send(newBeers);
  } catch (e) {
    console.log('e', e); // eslint-disable-line no-console
    res.status(500);
  }
};
