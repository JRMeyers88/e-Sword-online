'use strict';

const { Router } = require('express');
const router = Router();
const { getABookCommentary } = require('../app/controllers/commentaryCtrl');

router.get('/commentary', getABookCommentary);

module.exports = router;