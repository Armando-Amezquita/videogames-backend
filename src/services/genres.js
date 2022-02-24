const axios = require('axios')
const { API_KEY } = require('../config');


const getGenres = async() => {
    try {
        const dataApi = await axios(`https://api.rawg.io/api/genres${API_KEY}`);
        const genresApi = await dataApi.data.results.map(genre => genre.name);
        return genresApi;
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getGenres,
    
}