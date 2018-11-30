const request = require('request');
const zlib = require('zlib');

const url = 'https://smn.cna.gob.mx/webservices/?method=1';
const headers = { 'Accept-Encoding': 'gzip' };
let stringWS = "";

function removeDuplicates( arr, prop ) {
    var obj = {};
    for ( var i = 0, len = arr.length; i < len; i++ ){
      if(!obj[arr[i][prop]]) obj[arr[i][prop]] = arr[i];
    }
    var newArr = [];
    for ( var key in obj ) newArr.push(obj[key]);
    return newArr;
}

function getLocationsData(array) {
    var data = array.map(function(obj, index, array) {
        return { Name: obj.Name, CityId: obj.CityId };
    });
    data = removeDuplicates(data, 'CityId');
    return data;
};

function getSigleLocationData(array, req) {
    var data = array.map(function(obj, index, array) {
        const object = {
            Name: obj.Name,
            CityId: obj.CityId,
            DayNumber: obj.DayNumber,
            HiTempF: obj.HiTempF,
            LowTempF: obj.LowTempF,
            HiTempC: obj.HiTempC,
            LowTempC: obj.LowTempC
        };
        if (object.CityId === req.params.id) {
            return object
        };
    }).filter(function (el) {
        return el != null;
    });
    return data;
};

function getAllData(array) {
    var data = array.map(function(obj, index, array) {
        const object = {
            Name: obj.Name,
            CityId: obj.CityId,
            DayNumber: obj.DayNumber,
            HiTempF: obj.HiTempF,
            LowTempF: obj.LowTempF,
            HiTempC: obj.HiTempC,
            LowTempC: obj.LowTempC
        };
        return object;
    });
    return data;
};

exports.gunZipAPI = async function (req, res, next, type) {
    let gunzip = zlib.createGunzip();
    let reqAPI = request(url, headers);
    gunzip.on('data', function(data){
        stringWS += data.toString("utf8");
    });
    gunzip.on('error', function (err) {
        console.log(err);
    });
    gunzip.on('end', function(){
        res.setHeader('Content-Type', 'application/json');
        const jsonWS = JSON.parse(stringWS);
        /*
        let data;
        if (type === "locations") {
            data = getLocationsData(jsonWS);
        } else if (type === "singlelocation") {
            data = getSigleLocationData(jsonWS, req);
        } else {
            data = getAllData(jsonWS);
        }
        res.json(data);
        */
        res.json(jsonWS);
    });
    reqAPI.pipe(gunzip);
};