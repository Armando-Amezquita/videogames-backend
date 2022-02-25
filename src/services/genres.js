const axios = require('axios')
const { URI_GENRES } = require('../constantes')


const getGenres = async() => {
    try {
        const dataApi = await axios(`${URI_GENRES}`);
        const genresApi = await dataApi.data.results.map(genre => genre.name);
        return genresApi;
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getGenres,
    
}