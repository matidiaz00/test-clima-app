var express = require("express");
var router = express.Router();
var controllers = require('./controllers');

router.get("/all", controllers.AllController);

module.exports = router;