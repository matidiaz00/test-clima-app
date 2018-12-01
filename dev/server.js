var http = require('http');
var app = require('./server/app');

var port = process.env.PORT || 8082;

var server = http.createServer(app);

server.listen(port, function() {
    console.log("Follow the instructions below to see the web app");
    console.log("If evoirment is 'prod' open 'http://localhost:" + port + "/' in the browser");
    console.log("If evoirment is 'dev' open 'http://localhost:" + port + "/api/all' in the browser");
});