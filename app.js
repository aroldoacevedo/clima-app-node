const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//node app -d Madrid Espana
/*
lugar.getLugerLatLng(argv.direccion)
    .then(console.log)
    .catch(err => console.log(err));

clima.getClima(40.750000, -74.000000)
    .then(console.log);
*/
const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugerLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ coords.direccion } es de ${ temp }`;
    } catch (error) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }

};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);