const axios = require('axios');

const API_KEY = process.env.API_KEY



const getGameDetails = async (id) => {
    const gameDetailById = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    
    const gameData = gameDetailById.data
    const gameDetail = {
        id: gameData.id,
        name: gameData.name,    
        released: gameData.released,
        img: gameData.background_image,
        secondary_img: gameData.background_image_additional,
        trailer: gameData.trailer,
        description: gameData.description_raw,
        genres: gameData.genres.map(genre => genre.name),
        platform: gameData.platforms?.map(plat => plat.platform.name),
        stores: gameData.stores?.map(st => st.store.name)    
    }
    return gameDetail
}




module.exports = {
    getGameDetails
};