const store = require('./store')
const moment = require('moment')

async function getAppointments(psy, startDate, endDate) {
  if (!psy) throw new Error('Invalid Data')

  let datesInterval = {}
  if(!startDate || !endDate || startDate === '' || endDate === ''){
    start = moment().day(-7).format()
    end = moment().day(14).format()
    datesInterval = {
      startDate: start,
      endDate: end,
    }
  } else {
    datesInterval = {
      startDate,
      endDate
    }
  }

  return store.list(psy, datesInterval.startDate, datesInterval.endDate)
}

function createAppointment(appointment){
  if (Object.keys(appointment).length === 0) {
    throw new Error('Invalid Data')
  }

  return store.add(appointment)
}

function createFakeData() {
  return store.addFakeData()
}

function updateAppointment(id, appointment) {
  if (!appointmentId || !Array.isArray(appointment) || Object.keys(appointment).length === 0) {
    throw new Error('Invalid Id or Appointment')
  }

  return store.update(id, appointment)
} 

function deleteAppointment(appointmentId) {
  if(!appointmentId) throw new Error('Invalid Id or Appointment')
  
  return store.remove(appointmentId)
}

module.exports = {
  getAppointments,
  createAppointment,
  createFakeData,
  updateAppointment,
  deleteAppointment
}
