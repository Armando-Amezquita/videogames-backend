const { Router } = require('express');
const videogame = require('../models/Videogame');
const { getAllData, getQueryDataApi, getVideogamesById } = require('../services/videogames');
const router = Router();


router.get('/', async(req,res) => {
    const { name } = req.query;
    try {
        if(name){
            const dataDb = await videogame.find({ name: name }); 
            const dataApi = await getQueryDataApi(name);
            const allVideogames = [...dataDb, ...dataApi];
            allVideogames.length? res.json(allVideogames): res.json({message: 'No se encontro un juego con ese nombre', error: 404});
        }else{
            const dataApi = await getAllData();
            res.json(dataApi)
        }
    } catch (error) {
        console.log(error)
    }
});

router.get('/byId/:id', async(req,res) => {
    const { id } = req.params;
    let regex = /^[0-9]+$/;
    const compare = id.match(regex)
    try {
        if(!compare){
            const videogameDb = await videogame.findById(id);
            console.log(videogameDb)
            return res.json(videogameDb)
        }
        const dataApi = await getVideogamesById(id);
        res.json(dataApi)
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async(req,res) => {
    try{
        const {name, released, rating, platforms, genres } = req.body;
        const createVideogame = videogame({name, released, rating, platforms, genres});
        const newVideogame = await createVideogame.save();
        res.json(newVideogame);
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router;
