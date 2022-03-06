const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()

const {
    getGameDetails
} = require('../services/getDetails.service')

const getDetails = async (req, res) => {

}


module.exports = {
    getDetails
};
