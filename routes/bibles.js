'use strict';

const { Router } = require('express');
const router = Router();
const { getABook } = require('../app/controllers/bibleCtrl');

router.get('/bible/:version/:book/:chapter', getABook);

module.exports = router;