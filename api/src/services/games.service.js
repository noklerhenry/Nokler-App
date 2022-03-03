const axios = require('axios');

const getApiGames =  async () => {
    try {
        const apiGames =  await axios.get('https://api.rawg.io/api/games?key=8cf0a627fd28494d83d70c624ec46fb7')
        const apiGamesData = apiGames.data.results
        return apiGamesData
    } catch (error) {

        throw new Error(error)
    }
}

module.exports = {
    getApiGames,
};