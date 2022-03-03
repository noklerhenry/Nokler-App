const {
    getApiGames
} = require('../services/games.service')

const getGamesController = async (req, res) => {
    try {
        const games = await getApiGames()
        res.json(games)
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
}

module.exports = {
    getGamesController
  };