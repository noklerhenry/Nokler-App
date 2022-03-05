const { Router } = require("express");
const router = Router();

const searchGames = require('./searchByName.routes.js');
const postGame = require('./postGame.routes.js')
const platformFilter = require('./filterByPlatform.routes.js')

//Import de routers:

//Search games: 1-DB ; 2-API
router.use('/searchByName', searchGames)
router.use('/postGame', postGame)
router.use('/filterByPlatform', platformFilter)


module.exports = router;