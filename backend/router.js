const express = require('express')
const appointmentApi = require('./components/appointment/network')
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

const router = (server) => {
  server.use('/api/appointment', appointmentApi)
  server.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
}

module.exports = router
