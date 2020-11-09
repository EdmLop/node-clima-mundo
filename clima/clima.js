const axios = require('axios');

const getClima = async(lat, lon) => {

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e0c0b19eff3c19527338e5877a7dba52&units=metric`);
    return res.data.main.temp;
}

module.exports = {
    getClima
}