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
    return resp.send('<h1>Backend em NodeJS desenvolvido na Semana Omnistack 9.<h1> <a href="http://github.com/luliveira">Meu github </a>');
})


//Exportando as rotas de dentro do arquivo routes.js
module.exports = routes;
