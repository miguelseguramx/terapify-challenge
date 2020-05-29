const db = require('mongoose')

db.Promise = global.Promise

async function connectDb(url) {
  await db.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })  
  console.log('DB connected');
}

module.exports = connectDb
