const { Router } = require("express");
const router = Router();

const games = require('./game.routes.js');


//Import de routers:
router.use('/games', games)


module.exports = router;