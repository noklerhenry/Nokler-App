const { Router } = require("express");
const router = Router();

const searchGames = require('./searchByName.routes.js');
const postGame = require('./postGame.routes.js')
const platformFilter = require('./filterByPlatform.routes.js')
const getDetails = require('./getDetails.routes')

//Import de routers:

//Search games: 1-DB ; 2-API
router.use('/searchByName', searchGames)

//Get game details
router.use('/details', getDetails)

//Post game to DB ** INCOMPLETE **
router.use('/postGame', postGame)

// Filter by platform
router.use('/filterByPlatform', platformFilter)



module.exports = router;