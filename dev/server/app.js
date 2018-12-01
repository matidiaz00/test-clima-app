var express = require("express");
var app = express();
var routes = require("./routes");
var client = require("./client");

app.use(express.static('./prod'));

app.use("/", client);
app.use("/api", routes);

app.use( function(req, res, next) {
    var error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use(function(error, req, res, next) {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;