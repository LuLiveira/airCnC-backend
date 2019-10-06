const { Spot } = require('../../app/models');

module.exports = {
    async show(req, resp){
        const { user_id } = req.headers;

        const spots = await Spot.findAll({user_id: user_id});

        return resp.json(spots);
    }
}