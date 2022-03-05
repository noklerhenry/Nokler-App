const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()


const {
    searchApiGamesByName
} = require('../services/searchByName.service')

const searchGamesController = async (req, res) => {
    const name = req.query.name    
    try {
        if(name){
            const getDBGames = await prisma.Game.findMany({
                where: {
                    name: {
                        contains: name,
                        mode: 'insensitive'  
                    },
                },
                select: {
                    id: true,
                    name: true,
                    released_at: true,
                    rating: true,
                    image: true,
                    description: true,
                },
                // include: {
                //     genres: true,
                //     platforms: true,
                //     productKey: true,
                // },
            })
            if(getDBGames.length < 1) {
                const apiGames = await searchApiGamesByName(name)            
                res.json(apiGames)
            } else {
                res.status(200).json(getDBGames)    
            }
        } else {
            res.json('Game not found')
        }

    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
}

module.exports = {
    searchGamesController
  };