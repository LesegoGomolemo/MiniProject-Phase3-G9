// attributes
const express = require('express')
const queue = require('queue')
const logSetQueue = queue()
const communication = require('./communication')
const dbManager = require('./databaseManager')

// const redis = require('redis')
// const redisClient = redis.createClient()

var bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const app = express()

logSetQueue.start()
communication.setQueue(logSetQueue)
dbManager.setQueue(logSetQueue)

// express server operations
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/uploadLog', communication.processData)
app.get('/help', communication.showHelp)
app.get('/', (req, res) => {
  // serve markdown page available on the 301 site

  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(
    `Submit logs using the route "/uploadLog".\nThe route "/help" has the options.\nNow get back at it!\n\nQueries: u15055214@tuks.co.za`
  )
})

app.listen(port, () =>
  console.log(`Communication Module: listening on port ${port}!`)
)
