const mongose = require('mongoose')

const Schema = mongose.Schema

const appointmentSchema = new Schema({
  psy: {
    type: Number,
    required: true,
  },
  user: {
    type: Number,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  start_time: {
    type: Date,
    required: true,
  },
  end_time: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  totalPayed: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  payed: {
    type: Boolean,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
})

const Model = mongose.model('Appointment', appointmentSchema)

module.exports = Model
