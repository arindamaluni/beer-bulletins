'use strict';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {});

  user.associate = model => {
    user.belongsToMany(model.Beer, { through: 'UserBeers' });
  };
  return user;
};

//user has many beers through userbeers
