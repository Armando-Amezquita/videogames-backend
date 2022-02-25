const { Router } = require('express');
const routerVideogames = require('./videogames.routes');
const routerGenres = require('./genres.routes');
const router = Router();

router.use('/videogames', routerVideogames);
router.use('/genres', routerGenres);

module.exports = router;
