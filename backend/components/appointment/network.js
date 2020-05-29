const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router();

// El psy idealmente llegaria por nuestro JWT en la cookie 
// generada despues de haberse logeado, sin embargo en el ejercicio actual 
// agregar toda una capa de autenticacion era inecesario

router.get('/', 
  function(req, res) {
    const interval = req.query.interval || {}
    controller.getAppointments(req.query.psy, interval)
      .then(appointments => {
        response.success(req, res, appointments, 200);
      })
      .catch(err => {
        response.error(req, res, err, 500);
      })
  }
);

router.post('/', function(req, res) {
  controller.createAppointment(req.body.appointment)
    .then(data => {
      response.success(req, res, data, 201);
    })
    .catch(err => {
      response.error(req, res, err, 500);
    })
})

router.post('/all', function (req, res) {
  controller.createFakeData()
    .then(data => {
      response.success(req, res, data, 201);
    })
    .catch(err => {
      response.error(req, res, err, 500);
    })
})

router.put('/:id', function(req, res) {
  controller.updateAppointment(req.params.id, req.body.appointment)
    .then(data => {
      response.success(req, res, data, 204);
    })
    .catch(err => {
      response.error(req, res, err, 500);
    })
})

router.delete('/:id', function(req, res) {
  controller.deleteAppointment(req.params.id)
    .then(appointment => {
      response.success(req, res, 'Appointment Deleted', 202);
    })
    .catch(err => {
      response.error(req, res, err, 500);
    })
})

module.exports = router
