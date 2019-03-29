// attributes
var logSetQueue
// communication class operations
function setQueue (queue) {
  logSetQueue = queue
}

async function processData (req, res) {
  console.log('processData /')

  var data = req.body
  if (data.log_set.toString) var logSet = JSON.parse(data.log_set.toString())

  addToQueue(logSet)

  // logSet.auditLogs[0].logData : this is the stuff you add to the redis thing.

  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(`View info on the console`)
}

async function addToQueue (logSet) {
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
