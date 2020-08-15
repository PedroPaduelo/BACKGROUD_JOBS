const express = require('express');

const FirstQueueController = require('./app/Controllers/FirstQueueController')


const routes = express.Router();

routes.get('/queue', FirstQueueController.Index);


module.exports = routes;
