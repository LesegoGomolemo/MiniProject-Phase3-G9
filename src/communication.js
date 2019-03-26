const express = require('express')

var bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = 3000

app.post('/uploadLog', function (request, response) {
  console.log('POST /')

  var data = request.body
  var logSet = JSON.parse(data.log_set.toString())

  console.log(logSet.auditLogs[0].logData)

  // logSet.auditLogs[0].logData : this is the stuff you add to the redis thing.

  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end(`View info on the console`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
