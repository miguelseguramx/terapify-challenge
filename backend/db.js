const db = require('mongoose')

db.Promise = global.Promise

async function connectDb(url) {
  try {
    await db.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })  
    console.log('DB connected');
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDb
