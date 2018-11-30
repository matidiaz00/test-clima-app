const http = require('http');
const app = require('./server/app');

const port = process.env.PORT || 8081;

const server = http.createServer(app);

server.listen(port, () => {
    console.log("Open 'http://localhost:" + port + "/' in the browser for see the app (only if evoirment is 'prod', else if 'dev' add '/api/all').");
});