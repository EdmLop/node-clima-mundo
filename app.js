const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad  para obtener el clima',
        demand: true
    }
}).argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const { default: Axios } = require('axios');

/* let lugar = axion.getLugarLtLong(argv.direccion).then(lugar => {
    console.log(lugar);
}).catch(err => {
    console.log(err);
});

clima.getClima(19.4498, -99.1727).then(temp => {
    console.log(temp);
}).catch(err => {
    console.log('ERROR');
});
 */

let getInfo = async(direccion) => {
    try {
        let lug = await lugar.getLugarLtLong(direccion);
        let tem = await clima.getClima(lug.lat, lug.lon);
        return `La temperatura en ${lug.direc} es de ${tem} grados`;
    } catch (error) {
        throw new Error(`No se pudo obtener la temperatura de ${direccion}`);
    }

}

getInfo(argv.direccion).then(console.log).catch(console.log);
//console.log(lugar);

/* const encodeURL = encodeURI(argv.direccion);

console.log(encodeURL);

const instance = axios.create({
    baseURL: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8',
    headers: { 'x-rapidapi-key': '808b40e23emsh00922a9ffc0051cp18e76djsncaaa4e2364e6' }
});

instance.get().then(resp => {
    console.log(resp.data);
}).catch(err => {
    console.log('ERROR!!!', err);
}); */