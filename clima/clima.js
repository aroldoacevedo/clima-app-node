const axios = require('axios');

let getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=4a00997f030207668c52eed852bb3011`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}