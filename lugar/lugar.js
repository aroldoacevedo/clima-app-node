const axios = require('axios');

const getLugerLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);

    console.log(encodeUrl);

    const instance = await axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        headers: { 'x-rapidapi-key': '3d86b294abmsh2ec166374ce4e38p1dbbd7jsn529f69266f15' }
    });

    const resp = await instance.get();

    if (resp.data.Result == null || resp.data.Result.lenght === 0) {
        throw new Error(`No hay resultados para ${ dir } `);
    }

    const data = resp.data.Result[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        long

    }
};

module.exports = {
    getLugerLatLng
}