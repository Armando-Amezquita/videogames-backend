require('dotenv').config();

module.exports = {
    MONGO_DBA: process.env.MONGO_DBA || 'mongodb://localhost/videogames',
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    PORT: process.env.PORT || 3000, 
    API_KEY: process.env.API_KEY
}