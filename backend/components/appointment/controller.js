const store = require('./store')
const calcRangeOfDates = require('../../utils/calcRangeOfDates')

async function getAppointments(psy, interval) {
  if (!psy) throw new Error('Invalid Data')

  let datesInterval = interval
  if(Object.keys(datesInterval).length === 0){
    const today = new Date()
    datesInterval = calcRangeOfDates(today)
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
