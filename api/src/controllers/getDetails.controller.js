
const {
    getGameDetails
} = require('../services/getDetails.service')

const getDetails = async (req, res) => {
    const id = req.params.id
    try {
        if(id) {
            const gameApiDetail = await getGameDetails(id)
            // console.log(gameApiDetail)
            res.status(200).json(gameApiDetail)        
        } else {
            res.json('Game detail not found')
        }
    } catch (error) {
        console.log(error)
        res.status(500).json()
    }
}

module.exports = {
    getDetails
};
