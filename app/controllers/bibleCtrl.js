'use strict';

const { getBook } = require('../models/bibles');

module.exports.getABook = (req, res, next) => {
  getBook(1, 1)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
}