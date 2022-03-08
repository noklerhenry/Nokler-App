const { Router } = require("express");
const router = Router();

const searchGames = require('./searchByName.routes.js');
const postGame = require('./postGame.routes.js')
const getDetails = require('./getDetails.routes')
const getAllGames = require('./getAllGames.routes.js')
const userSearch = require('./userSearch.routes.js')
const filterByGenre = require('./filterByGenre.routes.js')

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
router.use("/searchGenre",searchGenre)


<<<<<<< HEAD
=======
//Filter by genre
router.use("/filterByGenre",filterByGenre)


// Filter by platform
router.use('/filterByPlatform', platformFilter)
>>>>>>> 91612e77cad839cf52ef465c757852d12cb0dcaa



module.exports = router;