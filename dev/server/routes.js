const express = require("express");
const router = express.Router();
const controllers = require('./controllers');

router.get("/all", controllers.AllController);
//router.get("/locations", controllers.LocationsController);
//router.get("/singlelocation/:id", controllers.SingleLocationController);

module.exports = router;