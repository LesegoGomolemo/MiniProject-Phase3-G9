// attributes
const express = require('express')
const queue = require('queue')
const logSetQueue = queue()

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

// express server operations
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/uploadLog', function (request, response) {
  // console.log('POST /')

  var data = request.body
  console.log(request.body)
  // read string from the start of the first quote to the second, match the word
  if (data.log_set.toString) var logSet = JSON.parse(data.log_set.toString())

  addToQueue(logSet)

  // logSet.auditLogs[0].logData : this is the stuff you add to the redis thing.

  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end(`View info on the console`)
})

app.listen(port, () =>
  console.log(`Communication Module: listening on port ${port}!`)
)

// communication class operations
function addToQueue (logSet) {
  /* example content of logSet:
        { "logs": [ { logType: 'cardCreated', logData: "stuff1" },
                    { logType: 'cardCreated', logData: "stuff5" },
                    { logType: 'cardCancelled', logData: "stuff9" }],
          "system": "audit"
        }
    */
  /* identify the subsystem using the 'system' attribute:
        valid: audit, atm, auth, face, nfc, otp, client, accounts, notif
  */
  logSetQueue.push(logSet)

  // console.log(logSetQueue.pop().system)
}
