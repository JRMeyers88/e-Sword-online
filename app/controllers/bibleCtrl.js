'use strict';

const { getBook } = require('../models/bibles');

module.exports.getABook = ({params:{version, book, chapter}}, res, next) => {
  getBook(version, book, chapter)
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
}