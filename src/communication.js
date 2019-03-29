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
  if (data.log_set.toString) {
    logSet = JSON.parse(data.log_set.toString())
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(`Data sent is incorrect`)
    // re
  }
  addToQueue(logSet)

  // logSet.auditLogs[0].logData : this is the stuff you add to the redis thing.

  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(`View info on the console`)
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

module.exports = {
  processData,
  setQueue,
  addToQueue
}
