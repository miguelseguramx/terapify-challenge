const express = require('express')
const config = require('./config')
const router = require('./router')
const errors = require('./network/error')
const connectDb = require('./db')
const cors = require('cors');

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = config.dbName
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${DB_NAME}?retryWrites=true&w=majority`



connectDb(MONGO_URI)

const app = express()

app.use(cors());
app.use(express.json());
router(app)
app.use(errors)

const PORT = config.port || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
