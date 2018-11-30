function removeDuplicates( arr, prop ) {
    var obj = {};
    for ( var i = 0, len = arr.length; i < len; i++ ){
      if(!obj[arr[i][prop]]) obj[arr[i][prop]] = arr[i];
    }
    var newArr = [];
    for ( var key in obj ) newArr.push(obj[key]);
    return newArr;
}

export function setLocationData(array) {
    var data = array.map(function(obj, index, array) {
        return { Name: obj.Name, CityId: obj.CityId };
    });
    data = removeDuplicates(data, 'CityId');
    return data;
}

export function setSigleLocationData(array, cityId) {
    var data = array.map(function(obj, index, array) {
        const dn = obj.DayNumber;
        const i = obj.IconCode;
        const object = {
            Name: obj.Name,
            CityId: obj.CityId,
            DayNumber: obj.DayNumber,
            Day: (dn === "0") ? "Vie." :
                 (dn === "1") ? "Sáb." :
                 (dn === "2") ? "Dom." :
                 (dn === "3") ? "Lun." :
                 (dn === "4") ? "Mar." :
                 (dn === "5") ? "Mié." :
                 "",
            icon: (i === "66") ? "fas fa-cloud-sun" : //Parcialmente nublado
                  (i === "85") ? "fas fa-sun" : //Soleado
                  (i === "65") ? "fas fa-sun" : //Mayormente soleado
                  (i === "70") ? "fas fa-smog" : //Niebla por la mañana / Sol por la tarde
                  (i === "87") ? "fas fa-cloud-rain" : //Aguaceros por la tarde
                  (i === "96") ? "fas fa-cloud-sun-rain" : //Tormentas dispersas
                  (i === "78") ? "fas fa-sun" : //Soleado / Viento
                  (i === "82") ? "fas fa-cloud-rain" : //Lluvia en la mañana
                  (i === "67") ? "fas fa-smog" : //Nublado
                  "fas fa-question",
            HiTempF: obj.HiTempF,
            LowTempF: obj.LowTempF,
            HiTempC: obj.HiTempC,
            LowTempC: obj.LowTempC,
            WindSpeedKm: obj.WindSpeedKm,
            RelativeHumidity: obj.RelativeHumidity,
            ProbabilityOfPrecip: obj.ProbabilityOfPrecip,
            SkyText: obj.SkyText
        };
        if (object.CityId === cityId) {
            return object
        };
    }).filter(function (el) {
        return el != null;
    });
    return data;
}