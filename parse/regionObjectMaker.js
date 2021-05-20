fs = require('fs');
// change regionName and coordinates and run this file using nodeJS, it will make a JSON file of that region
const regionName = "Panjgur"
const input = [
    63.991353,26.991374,
    63.9901514,26.9822723,
    63.9331598,26.9688096,
    63.9647455,26.9620777,
    63.9722986,26.9308608,
    63.9393396,26.8953487,
    64.0080042,26.8971858,
    64.0639658,26.9192287,
    64.1377802,26.9323912,
    64.2009516,26.9886971,
    64.198205,27.0208155,
    64.1473932,27.021733,
    64.0615625,27.0260148,
    64.0560694,27.003075,
    64.0286894,26.9924447,
    64.0110083,26.9938213,
    63.991353,26.991374,
]

const makeCoordinateArray = () => {
    const coordinates = []
    for (let i = 0; i < input.length; i=i+2) {
        coordinates.push({
            lat: input[i+1], lng: input[i]
        });
    }
    return coordinates;
}

const makeRegionObject = () => {
    const region = {
        name: regionName,
        coordinates: makeCoordinateArray(),
    }


    fs.writeFile(`${regionName}.json`, JSON.stringify(region), function (err) {
        if (err) return console.log(err);
        else console.log("Done");
    });
}

makeRegionObject();