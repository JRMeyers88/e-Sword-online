"use strict";

const { Router } = require("express");
const router = Router();

router.use(require("./bibles"));
router.use(require("./commentaries"));

router.get("/", (req, res) => {
  //provide endpoints
  res.json({
    Bible: "/bibles",
    Commentary: "/commentaries",
  });
});

module.exports = router;