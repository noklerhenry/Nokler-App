const { Router } = require("express");
const router = Router();

const searchGames = require('./searchByName.routes.js');
const postGame = require('./postGame.routes.js')
const platformFilter = require('./filterByPlatform.routes.js')
const getDetails = require('./getDetails.routes')
const getAllGames = require('./getAllGames.routes.js')
const userSearch = require('./userSearch.routes.js')

//Import de routers:

//All games
router.use('/allGames', getAllGames)

//Search games: 1-DB ; 2-API **ADMIN**
router.use('/searchByName', searchGames)

//Search games DB **USER**
router.use('/userSearch', userSearch)

//Get game details
router.use('/details', getDetails)

//Post game to DB ** INCOMPLETE **
router.use('/postGame', postGame)

// Filter by platform
router.use('/filterByPlatform', platformFilter)



module.exports = router;