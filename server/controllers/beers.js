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
  const beersBody = req.body;
  console.log(beersBody);
  try {
    const newBeers = await db.Beer.create({
      id: beersBody.id,
      beerId: beersBody.beerId,
      beerName: beersBody.beerName,
      beerLabel: beersBody.beerLabel,
      beerAbv: beersBody.beerAbv,
      beerIbu: beersBody.beerIbu,
      beerDescription: beersBody.beerDescription,
      beerStyle: beersBody.beerStyle,
      breweryName: beersBody.breweryName,
      breweryCountry: beersBody.breweryCountry,
      breweryLabel: beersBody.breweryLabel,
      breweryUrl: beersBody.breweryUrl,
    });
    res.status(201);
    res.send(newBeers);
  } catch (e) {
    console.log('e', e); // eslint-disable-line no-console
    res.status(500);
  }
};
