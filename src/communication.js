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
    // console.log('Log Set: ' + data.log_set.toString())
    logSet = JSON.parse(data.log_set.toString())
    console.log(data.log_set.toString())
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(`Data is not recieved.`)
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
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(
    `Use these Options: \n\n` +
      `options = {\n\thost: 'https://still-oasis-34724.herokuapp.com',` +
      `\n\tport: 80,` +
      `\n\tpath: '/uploadLog',` +
      `\n\tmethod: 'POST',` +
      `\n\theaders: {` +
      `\n\t 'Content-Type': 'application/x-www-form-urlencoded',` +
      `\n\t 'Content-Length': Buffer.byteLength(<postData>)` +
      `\n\t}` +
      `\n\n<postData>: contains the log data, in the format we describe below.` +
      `\n\t<postData> example: \n\t\tpostData = querystring.stringify({\n\t\t\tlog_set: logData\n\t\t})` +
      `\n\nExamples of what we'd expect from each subsystem (logData):` +
      `\n\ni. Authentication: \n\n` +
      `{ "logs":
      [ { logType: 'cardCreated', cardID: '7896358962547152', cardType: 'Student Debit', clientID: 782459825789, description: 'Could contain error or success codes', success: true, timestamp: '2018-21-09:18:45:15' },
        { logType: 'cardCreated', cardID: '7896358962547152', cardType: 'Student Credit', clientID: 782459825789, description: 'Could contain error or success codes', success: true, timestamp: '2018-21-09:18:45:15' },
        { logType: 'cardCreated', cardID: '7896358962547152', cardType: 'Student Debit', clientID: 782459825789, description: 'Could contain error or success codes', success: true, timestamp: '2018-21-09:18:45:15' }],
    "system": "auth"}` +
      `\n\nii. Facial Recognition: \n\n` +
      `{ "logs":
      [ { clientID: 782459825789, atmID: 556824854812, duration: 554188, success: false, timestamp: '2018-21-09:18:45:15' },
        { clientID: 782459825789, atmID: 556824854812, duration: 554188, success: false, timestamp: '2018-21-09:18:45:15' },
        { clientID: 782459825789, atmID: 556824854812, duration: 554188, success: false, timestamp: '2018-21-09:18:45:15' }],
    "system": "face"}` +
      `\n\niii. NFC: \n\n` +
      `{ "logs":
      [ { clientID: 782459825789, atmID: 556824854812, nfcType: 'S8-NFC', success: true, timestamp: '2018-21-09:18:45:15' },
        { clientID: 782459825789, atmID: 556824854812, nfcType: 'S8-NFC', success: true, timestamp: '2018-21-09:18:45:15' },
        { clientID: 782459825789, atmID: 556824854812, nfcType: 'S8-NFC', success: true, timestamp: '2018-21-09:18:45:15' }],
    "system": "nfc"}` +
      `\n\niv. OTP: \n\n` +
      `{ "logs":
      [ { clientID: 782459825789, pin: 'auy7', timestamp: '2018-21-09:18:45:15' },
        { clientID: 782459825789, pin: 'auy7', timestamp: '2018-21-09:18:45:15' },
        { clientID: 782459825789, pin: 'auy7', timestamp: '2018-21-09:18:45:15' }],
    "system": "otp"}` +
      `\n\nv. Client Information: \n\n` +
      `{ "logs":
      [ { clientID: 782459825789, accountID: 88556974158, eventType: 'Changed Password', timestamp: '2018-21-09:18:45:15' },
        { clientID: 782459825789, accountID: 88556974158, eventType: 'Changed Password', timestamp: '2018-21-09:18:45:15' },
        { clientID: 782459825789, accountID: 88556974158, eventType: 'Changed Password', timestamp: '2018-21-09:18:45:15' }],
    "system": "client"}` +
      `\n\nvi. Client Accounts: \n\n` +
      `{ "logs":
      [ { clientID: 782459825789, accountID: 88556974158, accountType: 'Student Cheque', eventType: 'Created Account', timestamp: '2018-21-09:18:45:15'},
        { clientID: 782459825789, accountID: 88556974158, accountType: 'Platinum', eventType: 'Created Account', timestamp: '2018-21-09:18:45:15'},
        { clientID: 782459825789, accountID: 88556974158, accountType: 'Gold', eventType: 'Created Account', timestamp: '2018-21-09:18:45:15'}],
    "system": "accounts"}` +
      `\n\nvii. Notifications: \n\n` +
      `{ "logs":
      [ { clientID: 782459825789, notificationType: 'Email', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', timestamp: '2018-21-09:18:45:15' },
        { clientID: 782459825789, notificationType: 'Email', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', timestamp: '2018-21-09:18:45:15' },
        { clientID: 782459825789, notificationType: 'Email', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', timestamp: '2018-21-09:18:45:15' }],
    "system": "notif"}` +
      `\n\nviii. ATM: \n\n` +
      `{ "logs":
      [ { atmID: 154896, clientID: 485697, timestamp: '2018-21-09:18:45:15', eventType: 'Deposit'},
        { atmID: 154896, clientID: 485697, timestamp: '2018-21-09:18:45:15', eventType: 'Withdrawal'},
        { atmID: 154896, clientID: 485697, timestamp: '2018-21-09:18:45:15', eventType: 'Balance'}]
    "system": "atm"}` +
      `\n\nQueries: u15055214@tuks.co.za`
  )
}

module.exports = {
  processData,
  setQueue,
  addToQueue,
  showHelp
}
