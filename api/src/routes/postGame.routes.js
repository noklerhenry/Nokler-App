const express = require('express')
const router = express.Router();

const {
    postGameController
} = require('../controllers/postGame.controller.js')


router.post('/', postGameController)


module.exports = router;