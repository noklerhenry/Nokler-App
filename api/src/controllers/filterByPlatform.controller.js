const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()


const filterByPlatform = async (req, res) => {
    const plat = req.query.platform    
    try {
        if(plat){
            const platformFilter = await prisma.game.findMany({
                include: {
                    genres: true,
                    platforms: true,
                    productKey: true,
                }
            })
            const formatDBGames = platformFilter.map(data => {
                return {
                id: data.id,
                name: data.name,    
                released: data.released_at?.toISOString().split('T')[0],
                img: data.image,
                trailer: data.trailer,
                description: data.description,
                genres: data.genres.map(genre => genre.name),
                platform: data.platforms?.map(plat => plat.name),
                productKey: data.productKey?.map(pkey => pkey.key)             
                }
            }                  
        )     
        const filteredGames =  formatDBGames.filter(f => f.platform.includes(plat))

        // console.log('hola', formatDBGames)
        res.json(filteredGames)
        } else {
            res.json('Game not found')
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
}

module.exports = {
    filterByPlatform
};