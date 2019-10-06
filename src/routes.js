const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload')
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const { User } = require('../app/models');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/sessions", SessionController.store);
routes.post("/spots", upload.single('thumbnail'), SpotController.store);
routes.post("/spots/:spot_id/bookings", BookingController.store)

routes.get("/spots", SpotController.index);
routes.get("/dashboard", DashboardController.show);

routes.get("/", (req, resp) => {
    return resp.send(
        '<h1>Backend em NodeJS com MySQL desenvolvido na Semana Omnistack 9.<h1>' +
        '<form enctype="text/plain" method="get" action="mailto:lcsd.lucas@gmail.com">            Your First Name: <input type="text" name="first_name"><br>             Your Last Name: <input type="text" name="last_name"><br>             Comments: <textarea rows="5" cols="30" name="comments"></textarea>             <input type="submit" value="Send">         </form>' +
        '<a href="https://github.com/LuLiveira/backend-nodejs">Meu github </a>'
        );
})


//Exportando as rotas de dentro do arquivo routes.js
module.exports = routes;
