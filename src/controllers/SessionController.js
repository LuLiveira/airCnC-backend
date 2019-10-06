//Importando modulo de usuario
const { User } = require('../../app/models');

//index, show, store, update, destroy

module.exports = {
    async store(req, res) {

        const { email } = req.body;
        const { nome } = req.body;

        const user = await User.findOne({
            where:{
                email: email
            }
        });

        (user == null) ? user = await User.create({
            nome,
            email
        }) : user

        

        return res.json(user);
    }
};