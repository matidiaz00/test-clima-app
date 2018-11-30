const GunZip = require('./gunzip');

exports.AllController = (req, res, next) => GunZip.gunZipAPI(req, res, next, "all");

//exports.LocationsController = (req, res, next) => GunZip.gunZipAPI(req, res, next, "locations");

//exports.SingleLocationController = (req, res, next) => GunZip.gunZipAPI(req, res, next, "singlelocation");