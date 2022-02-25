const axios = require('axios')
const videogame = require('../models/Videogame');
const { API_KEY } = require('../config');


const getVideogames = async() => {
    const dataApi = await axios(`https://api.rawg.io/api/games${API_KEY}&page=2&page_size=5`);
    const dataApiMap = await dataApi.data.results.map(videogame => ({
        id: videogame.id,
        name: videogame.name,
        released: videogame.released,
        image: videogame.background_image,
        rating: videogame.rating,
        platforms: videogame.platforms.map(platform => platform.platform.name),
        genres: videogame.genres.map(genre => genre.name),
    }));
    return dataApiMap;
}
const getVideogamesDb = async() => {
    const dataDb = await videogame.find();
    return dataDb;
}
const getAllData = async() => {
    const dataApi = await getVideogames();
    const dataDb = await getVideogamesDb();
    const dataTotal = [...dataDb, ...dataApi];
    return dataTotal
}

const getFirstTwenty = async(array) => {
    const firstTwenty = []
    for (let i = 0; i <= 20; i++) {
        firstTwenty.push(array[i]);        
    }
    const deleteSpaces = firstTwenty.filter(ele => ele);
    return deleteSpaces;
}

const getVideogamesById = async(id) => {
    const videogame = await axios(`https://api.rawg.io/api/games/${id}?key=d0e09f787b57497bb836b8c8bfea4c6e`);
    const videogameMap = await {
        id: videogame.data.id,
        name: videogame.data.name,
        released: videogame.data.released,
        image: videogame.data.background_image,
        rating: videogame.data.rating,
        platforms: videogame.data.platforms.map(platform => platform.platform.name),
        genres: videogame.data.genres.map(genre => genre.name),
        description: videogame.data.description
    }
    return videogameMap;
}

const getQueryDataApi = async(name) => {
    const dataApi = await axios(`https://api.rawg.io/api/games?key=d0e09f787b57497bb836b8c8bfea4c6e&search=${name}`);
    const videogames = await dataApi.data.results.map(videogame => ({
        id: videogame.id,
        name: videogame.name,
        released: videogame.released,
        image: videogame.background_image,
        rating: videogame.rating,
        platforms: videogame.platforms.map(platform => platform.platform.name),
        genres: videogame.genres.map(genre => genre.name),
    }));
    const firstTwenty = await getFirstTwenty(videogames);
    return firstTwenty
}

module.exports = {
    getVideogames,
    getAllData,
    getQueryDataApi,
    getVideogamesById
}