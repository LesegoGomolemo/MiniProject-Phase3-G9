// attributes
var logSetQueue

// communication class operations
function setQueue (queue) {
  logSetQueue = queue
}

async function processData (req, res) {
  // console.log('processData /')
  // do some basic error handling
  var data = req.body
  // console.log('ProcessData ' + JSON.stringify(data))

  if (data.log_set != null) {
    // console.log('Log Set: ' + data.log_set.toString())
    // validate like above
    addToQueue(data)
    res.json({ status: 'success' })
    res.end()
  } else {
    // validation of data recieved
    if (data.system == null) {
      // this body is bad already
      // res.writeHead(200, { 'Content-Type': 'text/plain' })
      // res.end(`Failure: Data is not recieved.`)
      res.json({ status: 'failure' })
      res.end()
    } else {
      if (data.logs == null) {
        res.json({ status: 'failure' })
        res.end()
      } else {
        // as per subsystem, use a regex to check if the first or random five items in log array
        switch (data.system) {
          case 'auth': {
            res.json({ status: 'success' })
            res.end()
            break
          }

          case 'atm': {
            res.json({ status: 'success' })
            res.end()
            break
          }

          case 'face': {
            res.json({ status: 'success' })
            res.end()
            break
          }

          case 'nfc': {
            res.json({ status: 'success' })
            res.end()
            break
          }

          case 'otp': {
            res.json({ status: 'success' })
            res.end()
            break
          }

          case 'client': {
            res.json({ status: 'failure' })
            res.end()
            break
          }

          case 'accounts': {
            res.json({ status: 'success' })
            res.end()
            break
          }

          case 'notif': {
            res.json({ status: 'success' })
            res.end()
            break
          }

          default: {
            res.json({ status: 'failure' })
            res.end()
            break
          }
        }
      }
    }
  }

  // res.writeHead(200, { 'Content-Type': 'text/plain' })
  // res.end(`Failure: Data is not recieved.`)
}

function addToQueue (logSet) {
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
