// attributes
const express = require('express')
const queue = require('queue')
const logSetQueue = queue()
const communication = require('./communication')
const dbManager = require('./databaseManager')

// const redis = require('redis')
// const redisClient = redis.createClient()

var bodyParser = require('body-parser')
const port = 3000
const app = express()

// setup operations
/* redisClient.on('error', function (err) {
  console.log('Error ' + err)
}) */
logSetQueue.start()
communication.setQueue(logSetQueue)
dbManager.setQueue(logSetQueue)

// express server operations
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/uploadLog', communication.processData)

app.listen(port, () =>
  console.log(`Communication Module: listening on port ${port}!`)
)
