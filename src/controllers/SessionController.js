//Importando modulo de usuario
const { User } = require('../../app/models');

//index, show, store, update, destroy

module.exports = {
    async store(req, res) {

        const { email } = req.body;
        const { nome } = req.body;

        const user = await User.create({
            email, nome
        });

        res.json(user);
    }
};