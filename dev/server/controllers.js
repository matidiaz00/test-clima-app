var request = require('request');
var zlib = require('zlib');

exports.AllController = (req, res, next) => {
    var url = 'https://smn.cna.gob.mx/webservices/?method=1';
    var headers = { 'Accept-Encoding': 'gzip' };
    var stringWS = "";
    var gunzip = zlib.createGunzip();
    var reqAPI = request(url, headers);
    gunzip.on('data', function(data){
        stringWS += data.toString("utf8");
    });
    gunzip.on('error', function (err) {
        console.log(err);
    });
    gunzip.on('end', function(){
        res.setHeader('Content-Type', 'application/json');
        var jsonWS = JSON.parse(stringWS);
        res.json(jsonWS);
    });
    reqAPI.pipe(gunzip);
};