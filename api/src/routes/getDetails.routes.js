const express = require('express')
const router = express.Router();

const {
    getDetails
} = require('../controllers/getDetails.controller')


router.get('/', getDetails)


module.exports = router;