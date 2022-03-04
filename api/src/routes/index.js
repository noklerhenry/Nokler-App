const { Router } = require("express");
const router = Router();

const games = require('./searchByName.routes.js');


//Import de routers:

//Search games: 1-DB ; 2-API
router.use('/searchByName', games)


module.exports = router;