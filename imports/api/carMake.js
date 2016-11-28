import { Meteor } from 'meteor/meteor';


export default function cars(make, model) {

    var json = [
      {"make":"ACURA"},
      {"make":"ALFA ROMEO"},
      {"make":"AMERICAN IRONHORSE"},
      {"make":"AMERICAN LAFRANCE"},
      {"make":"APRILIA"},
      {"make":"ARCTIC CAT"},
      {"make":"ARGO"},
      {"make":"ASTON MARTIN"},
      {"make":"ATK"},
      {"make":"AUDI"},
      {"make":"AUTOCAR LLC."},
      {"make":"AVANTI"},
      {"make":"BENTLEY"},
      {"make":"BERTONE"},
      {"make":"BETA"},
      {"make":"BIG DOG"},
      {"make":"BIMOTA"},
      {"make":"BLUE BIRD"},
      {"make":"BMW"},
      {"make":"BOBCAT"},
      {"make":"BOMBARDIER"},
      {"make":"BUELL"},
      {"make":"BUGATTI"},
      {"make":"BUICK"},
      {"make":"CADILLAC"},
      {"make":"CAN-AM"},
      {"make":"CANNONDALE"},
      {"make":"CHANCE COACH TRANSIT BUS"},
      {"make":"CHEVROLET"},
      {"make":"CHRYSLER"},
      {"make":"COBRA"},
      {"make":"CODA"},
      {"make":"COUNTRY COACH MOTORHOME"},
      {"make":"CRANE CARRIER"},
      {"make":"CUB CADET"},
      {"make":"DAEWOO"},
      {"make":"DODGE"},
      {"make":"DUCATI"},
      {"make":"E-TON"},
      {"make":"EL DORADO"},
      {"make":"FERRARI"},
      {"make":"FIAT"},
      {"make":"FISKER"},
      {"make":"FORD"},
      {"make":"FREIGHTLINER"},
      {"make":"GAS GAS"},
      {"make":"GILLIG"},
      {"make":"GMC"},
      {"make":"HARLEY DAVIDSON"},
      {"make":"HINO"},
      {"make":"HM"},
      {"make":"HONDA"},
      {"make":"HUMMER"},
      {"make":"HUSABERG"},
      {"make":"HUSQVARNA"},
      {"make":"HYOSUNG"},
      {"make":"HYUNDAI"},
      {"make":"IC CORPORATION"},
      {"make":"INDIAN"},
      {"make":"INFINITI"},
      {"make":"INTERNATIONAL"},
      {"make":"ISUZU"},
      {"make":"JAGUAR"},
      {"make":"JEEP"},
      {"make":"JOHN DEERE"},
      {"make":"KASEA"},
      {"make":"KAWASAKI"},
      {"make":"KENWORTH"},
      {"make":"KIA"},
      {"make":"KTM"},
      {"make":"KUBOTA"},
      {"make":"KYMCO"},
      {"make":"LAFORZA"},
      {"make":"LAMBORGHINI"},
      {"make":"LAND ROVER"},
      {"make":"LEM"},
      {"make":"LEXUS"},
      {"make":"LINCOLN"},
      {"make":"LOTUS"},
      {"make":"MACK"},
      {"make":"MASERATI"},
      {"make":"MAYBACH"},
      {"make":"MAZDA"},
      {"make":"MCLAREN"},
      {"make":"MERCEDES-BENZ"},
      {"make":"MERCURY"},
      {"make":"MINI"},
      {"make":"MITSUBISHI FUSO"},
      {"make":"MITSUBISHI"},
      {"make":"MORGAN"},
      {"make":"MOTO GUZZI"},
      {"make":"MOTOR COACH INDUSTRIES"},
      {"make":"MV AGUSTA"},
      {"make":"NASH"},
      {"make":"NEW FLYER"},
      {"make":"NISSAN"},
      {"make":"NOVA BUS CORPORATION"},
      {"make":"OLDSMOBILE"},
      {"make":"ORION BUS"},
      {"make":"OSHKOSH MOTOR TRUCK CO."},
      {"make":"OTTAWA"},
      {"make":"PANOZ"},
      {"make":"PETERBILT"},
      {"make":"PEUGEOT"},
      {"make":"PIAGGIO"},
      {"make":"PIERCE MFG. INC."},
      {"make":"PLYMOUTH"},
      {"make":"POLARIS"},
      {"make":"PONTIAC"},
      {"make":"PORSCHE"},
      {"make":"QVALE"},
      {"make":"RAM"},
      {"make":"RENAULT"},
      {"make":"ROLLS ROYCE"},
      {"make":"ROVER"},
      {"make":"SAAB"},
      {"make":"SALEEN"},
      {"make":"SATURN"},
      {"make":"SCION"},
      {"make":"SEA-DOO"},
      {"make":"SEAT"},
      {"make":"SKI-DOO"},
      {"make":"SMART"},
      {"make":"SRT"},
      {"make":"STERLING TRUCK"},
      {"make":"STERLING"},
      {"make":"SUBARU"},
      {"make":"SUZUKI"},
      {"make":"TESLA"},
      {"make":"TM"},
      {"make":"TOYOTA"},
      {"make":"TRIUMPH"},
      {"make":"UD"},
      {"make":"VENTO"},
      {"make":"VESPA"},
      {"make":"VICTORY"},
      {"make":"VOLKSWAGEN"},
      {"make":"VOLVO"},
      {"make":"VPG"},
      {"make":"WESTERN RV"},
      {"make":"WESTERN STAR"},
      {"make":"WORKHORSE"},
      {"make":"YAMAHA"},
    ]



    if (model === undefined) {

        var matchingMake = [];

        for (var i = 0; i < json.length; i++) {

            var wordLength = make.length;

            if (json[i].make.substring(0, wordLength) === make) {
                matchingMake.push([json[i].make, json[i].model]);
            }

        }
        return matchingMake;

    }

    else {

        var matchingMake = [];
        var matchingModel = [];

        for (var j = 0; j < json.length; j++) {

            var wordLength = make.length;

            if (json[j].make.substring(0, wordLength) === make) {
                matchingMake.push([json[j].make, json[j].model]);
            }

        }

        for (var k = 0; k < matchingMake.length; k++) {

            var wordLength = model.length;

            if (matchingMake[k][1].substring(0, wordLength) === model) {
                matchingModel.push(matchingMake[k][1]);
            }

        }
        return matchingModel;


    }
}