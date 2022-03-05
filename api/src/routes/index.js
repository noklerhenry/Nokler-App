const { Router } = require("express");
const router = Router();

const searchGames = require('./searchByName.routes.js');


//Import de routers:

//Search games: 1-DB ; 2-API
router.use('/searchByName', searchGames)


module.exports = router;