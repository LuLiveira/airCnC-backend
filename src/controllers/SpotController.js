const { Spot } = require('../../app/models');

module.exports = {
    async index(req, res){
        const { tech } = req.query;
        
        const spots = await Spot.findAll({techs: tech});

        return res.json(spots);
    },


    async store(req, res){

        const { filename } = req.file;
        const {company, techs, price} = req.body;
        const { user_id } = req.headers;

        const spot = await Spot.create({
            user_id: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        });
        
        return res.json(spot);
    }
}