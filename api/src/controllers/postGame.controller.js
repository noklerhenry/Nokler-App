const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()

const postGameController = async (req, res) => {
    const { gameData } = req.body;
    if (gameData) {
        try {
            const newGame = await prisma.game.create(gameData)
            res.status(200).json('Videogame created')
            
        } catch (error) {
            // console.log(error)
            res.status(500).json(error.message)    
        }
    }
}

module.exports = {
    postGameController
  };


//   {
//       "gameData" : {
//           "id"
//           "name"
//           "released"
//           "rating"
//           "image"
//           "description"
//           "trailer"
//           "genres" []
//           "platform" []
//           "productKey"
//       }
//   }