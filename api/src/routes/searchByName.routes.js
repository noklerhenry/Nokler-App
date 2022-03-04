const express = require('express')
const router = express.Router();

const {
    getGamesController
} = require('../controllers/game.controller.js')


router.get('/', getGamesController)


module.exports = router;