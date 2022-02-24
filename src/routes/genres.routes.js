const { Router } = require('express');
const genres = require('../models/Genres');
const { getGenres } = require('../services/genres');
const router = Router();

router.post('/', async(req,res) => {
    try {
        const dataGenres = await getGenres();
        for (let i = 0; i < dataGenres.length; i++) {
            let newGenre = genres.create( {name: dataGenres[i]})
            await console.log(newGenre)
        }
        res.json(dataGenres);        
    } catch (error) {
        console.log(error)
    }
});

router.get('/', async(req,res) => {
    const data = await genres.find();
    res.json(data);
})

module.exports = router;