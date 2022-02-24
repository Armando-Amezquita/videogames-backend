const { Router } = require('express');
const videogame = require('../models/Videogame');
const { getAllData, getFirstTwenty } = require('../services/videogames');
const router = Router();

router.get('/', async(req,res) => {
    const { name } = req.query;
    console.log(name)
    try {
        const dataApi = await getAllData();
        if(name){
            const filterByName = await dataApi.filter(videogame => videogame.name.toUpperCase().includes(name.toUpperCase()));
            const firstTwenty = await getFirstTwenty(filterByName);
            firstTwenty.length ? res.json(firstTwenty) : res.json({message: 'No existe un juego con dicho Id', error: 404 })
            
        }else{
            res.json(dataApi);
        }
    } catch (error) {
        console.log(error)
    }
});


router.post('/', async(req,res) => {
    const {name, released, rating, platforms, genres } = req.body;
    const createVideogame = videogame({name, released, rating, platforms, genres});
    const newVideogame = await createVideogame.save();
    res.json(newVideogame);
})

module.exports = router;


/*   [ ] __GET /videogames?name="..."__:
  - Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
  - Si no existe ningún videojuego mostrar un mensaje adecuado
- [ ] __GET /videogame/{idVideogame}__:
  - Obtener el detalle de un videojuego en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de videojuego
  - Incluir los géneros asociados
- [ ] __GET /genres__:
  - Obtener todos los tipos de géneros de videojuegos posibles
  - En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
- [ ] __POST /videogame__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
  - Crea un videojuego en la base de datos */