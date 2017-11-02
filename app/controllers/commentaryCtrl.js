'use strict';

const { getBookCommentary } = require('../models/commentaries');

module.exports.getABookCommentary = (req, res, next) => {
  getBookCommentary()
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => next(err));
}