const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const parser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(cors())

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

const routes = require('./routes/routes')
app.use('/posts', routes)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' }})
})

const listener = () => `Listening on port ${port}!`
app.listen(port, listener)

module.exports = app
