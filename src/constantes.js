const { API_KEY } = require('./config');

const URI_GENRES = `https://api.rawg.io/api/genres${API_KEY}`;
const URI_API_DATA = `https://api.rawg.io/api/games${API_KEY}&page=2&page_size=5`;
const URI_API_DATA_BY_ID = `https://api.rawg.io/api/games/`;
const URI_API_DATA_BY_NAME = `https://api.rawg.io/api/games?key=d0e09f787b57497bb836b8c8bfea4c6e&search=`

module.exports = {
    URI_GENRES,
    URI_API_DATA,
    URI_API_DATA_BY_ID,
    URI_API_DATA_BY_NAME
}