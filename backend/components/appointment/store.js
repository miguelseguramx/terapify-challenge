const Model = require('./model')
const fakeData = require('../../fakeData')

function getAppointments(psy ,startDate, endDate) {
  const start = new Date(startDate)
  const end = new Date(endDate)
  end.setHours(23,59,59,999)
  return Model.find(
    { 
      "start_time": {"$gte": start, "$lt": end}, 
      "psy": psy
    }
  )
  // Si tuvieramos datos de usuarios reales usariamos algo asi
  // .populate('user')
  // .exec((err, populated) => {
  //   if(err){
  //     reject(err)
  //     return false
  //   }
  //   resolve(populated)
  // })
  // 
  // 
}

function addAppointment(appointment) {
  const myAppointment = new Model(appointment)
  return myAppointment.save()
}

function addFakeData() {
  return Model.insertMany(fakeData)
}

function removeAppointment(id) {
  return Model.deleteOne({
    _id: id
  })
}

function updateAppointment(id, appointment){
  return Model.findByIdAndUpdate(id, appointment, {
    new: true
  })
}

module.exports = {
  add: addAppointment,
  addFakeData,
  list: getAppointments,
  update: updateAppointment,
  remove: removeAppointment,
}
