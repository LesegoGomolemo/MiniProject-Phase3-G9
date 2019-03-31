// attributes
var logSetQueue

// communication class operations
function setQueue (queue) {
  logSetQueue = queue
}

async function processData (req, res) {
  // console.log('processData /')

  var data = req.body
  var logSet
  if (data.log_set.toString()) {
    logSet = JSON.parse(data.log_set.toString())
    console.log(data.log_set.toString())
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(`Data sent is incorrect`)
    //
  }
  addToQueue(logSet)

  // logSet.auditLogs[0].logData : this is the stuff you add to the redis thing.

  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(`Success: Logs have been recieved.`)
}

function addToQueue (logSet) {
  /* example content of logSet:
        { "logs": [ { logType: 'cardCreated', logData: "stuff1" },
                    { logType: 'cardCreated', logData: "stuff5" },
                    { logType: 'cardCancelled', logData: "stuff9" }],
          "system": "audit"
        }
  */
  logSetQueue.push(logSet)

  // console.log(logSetQueue.pop().system)
}

async function showHelp (req, res) {
  var options = {
    host: 'https://still-oasis-34724.herokuapp.com',
    port: 80,
    path: '/uploadLog',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': 'Buffer.byteLength(<postData>)'
    }
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(
    `Use these Options: \n\n` +
      JSON.stringify(options) +
      `\n\n<postData>: the log data` +
      `\n\nExamples of what we expect from each subsystem:` +
      `\n\ni.Authentication: \n\n` +
      `{ "logs":
      [ { logType: 'cardCreated', cardID: '7896358962547152', cardType: 'Student Debit', clientID: 782459825789, description: 'Could contain error or success codes', success: true, timestamp: '2018-21-09:18:45:15' },
        { logType: 'cardCreated', cardID: '7896358962547152', cardType: 'Student Credit', clientID: 782459825789, description: 'Could contain error or success codes', success: true, timestamp: '2018-21-09:18:45:15' },
        { logType: 'cardCreated', cardID: '7896358962547152', cardType: 'Student Debit', clientID: 782459825789, description: 'Could contain error or success codes', success: true, timestamp: '2018-21-09:18:45:15' }],
    "system": "auth"}` +
      `\n\nOther subsystems to follow. \n\nQueries: u15055214@tuks.co.za`
  )
}

module.exports = {
  processData,
  setQueue,
  addToQueue,
  showHelp
}
