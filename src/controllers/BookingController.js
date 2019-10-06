const { Booking } = require('../../app/models');


module.exports = {
    async store(req, res){
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({
            date,
            user_id: user_id,
            spot_id: spot_id,
        });

        return res.json(booking);
    }
};