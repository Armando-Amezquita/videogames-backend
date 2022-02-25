const axios = require('axios')
const videogame = require('../models/Videogame');
const { API_KEY } = require('../config');
const { URI_API_DATA_BY_ID, URI_API_DATA, URI_API_DATA_BY_NAME } = require('../constantes')


const getVideogames = async() => {
    const dataApi = await axios(`${URI_API_DATA}`);
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
    const videogame = await axios(`${URI_API_DATA_BY_ID}${id}${API_KEY}`);
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
    const dataApi = await axios(`${URI_API_DATA_BY_NAME}${name}`);
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
    getAllData,
    getQueryDataApi,
    getVideogamesById
}