const axios = require('axios');

const getLugarLtLong = async(direccion) => {
    const encodeURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8',
        headers: { 'x-rapidapi-key': '808b40e23emsh00922a9ffc0051cp18e76djsncaaa4e2364e6' }
    });

    const resp = await instance.get();

    if (resp.data === null) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data;
    const direc = data.city;
    const lat = data.latitude;
    const lon = data.longitude;

    return {
        direc,
        lat,
        lon
    }
}

module.exports = {
    getLugarLtLong
}