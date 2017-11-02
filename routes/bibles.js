'use strict';

const { Router } = require('express');
const router = Router();
const { getABook } = require('../app/controllers/bibleCtrl');

router.get('/bible', getABook);

module.exports = router;