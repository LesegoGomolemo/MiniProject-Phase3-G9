// attributes
var logSetQueue
var dbManager

// communication class operations
function setQueue (queue) {
  logSetQueue = queue
}

function setDBManager (dbm) {
  dbManager = dbm
}

async function processData (req, res) {
  // console.log('processData /')
  // do some basic error handling
  var data = req.body
  // console.log('ProcessData ' + JSON.stringify(data))

  if (data.log_set != null) {
    data = data.log_set
  }

  if (data.system == null) {
    res.json({ status: 'failure', message: 'No system identifier.' })
    res.end()
  } else {
    if (data.logs == null) {
      res.json({ status: 'failure', message: "Logs doesn't exist." })
      res.end()
    } else {
      // as per subsystem, use a regex to check if the first or random five items in log array
      switch (data.system) {
        case 'auth': {
          if (data.logs.length === 0) {
            res.json({
              status: 'failure',
              message: 'Logs array is empty.'
            })
            res.end()
          } else {
            var st = JSON.stringify(data.logs[0])
            if (
              st.match(
                `{"logType":"[\\w.]{2,}","cardID":(\\d{2,6}|"\\d{2,6}"),"cardType":"[\\w.\\s.\\d]{2,}","clientID":\\d{2,6},"description":"[\\w.\\d.\\s,-:;_]{2,}","success":[\\w.]{4,5},"timestamp":"[\\d.]{4}-[0-1][0-9]-[0-3][0-9]\\s\\d{2}:\\d{2}:\\d{2}"}`
              )
            ) {
              addToQueue(data)
              res.json({
                status: 'success',
                message: 'Logs recieved.'
              })
              res.end()
            } else {
              res.json({
                status: 'failure',
                message:
                  'Logs are of incorrect format. Please check the all fields, and their data. Consult: http://still-oasis-34724.herokuapp.com/help'
              })
              res.end()
            }
          }
          break
        }

        case 'atm': {
          if (data.logs.length === 0) {
            res.json({
              status: 'failure',
              message: 'Logs array is empty.'
            })
            res.end()
          } else {
            var st = JSON.stringify(data.logs[0])
            if (
              st.match(
                `{"atmID":\\d{2,6},"clientID":\\d{2,6},"timestamp":"\\d{4}-[0-1][0-9]-[0-3][0-9]\\s\\d{2}:\\d{2}:\\d{2}","eventType":"[\\w.\\d.\\s]{2,}"}`
              )
            ) {
              addToQueue(data)
              res.json({
                status: 'success',
                message: 'Logs recieved.'
              })
              res.end()
            } else {
              res.json({
                status: 'failure',
                message:
                  'Logs are of incorrect format. Please check the all fields, and their data. Consult: http://still-oasis-34724.herokuapp.com/help'
              })
              res.end()
            }
          }
          break
        }

        case 'face': {
          if (data.logs.length === 0) {
            res.json({
              status: 'failure',
              message: 'Logs array is empty.'
            })
            res.end()
          } else {
            var st = JSON.stringify(data.logs[0])
            if (
              st.match(
                `{"clientID":\\d{2,6},"atmID":"null","duration":\\d{2,3},"success":[\\w.]{4,5},"timestamp_":"\\d{4}-[0-1][0-9]-[0-3][0-9]\\s\\d{2}:\\d{2}:\\d{2}"}`
              )
            ) {
              addToQueue(data)
              res.json({
                status: 'success',
                message: 'Logs recieved.'
              })
              res.end()
            } else {
              res.json({
                status: 'failure',
                message:
                  'Logs are of incorrect format. Please check the all fields, and their data. Consult: http://still-oasis-34724.herokuapp.com/help'
              })
              res.end()
            }
          }
          break
        }

        case 'nfc': {
          if (data.logs.length === 0) {
            res.json({
              status: 'failure',
              message: 'Logs array is empty.'
            })
            res.end()
          } else {
            var st = JSON.stringify(data.logs[0])
            if (
              st.match(
                `{"clientID":\\d{2,6},"atmID":\\d{2,6},"nfcType":"[\\w\\s\\d-]{2,}","success":[\\w]{4,5},"timestamp":"\\d{4}-[0-1][0-9]-[0-3][0-9]\\s\\d{2}:\\d{2}:\\d{2}"}`
              )
            ) {
              addToQueue(data)
              res.json({
                status: 'success',
                message: 'Logs recieved.'
              })
              res.end()
            } else {
              res.json({
                status: 'failure',
                message:
                  'Logs are of incorrect format. Please check the all fields, and their data. Consult: http://still-oasis-34724.herokuapp.com/help'
              })
              res.end()
            }
          }
          break
        }

        case 'otp': {
          if (data.logs.length === 0) {
            res.json({
              status: 'failure',
              message: 'Logs array is empty.'
            })
            res.end()
          } else {
            var st = JSON.stringify(data.logs[0])
            if (
              st.match(
                `{"cardID":\\d{2,6},"cardType":"[\\w]{2,}","clientID":\\d{2,6},"eventType":"[\\w]{2,}","success":[\\w]{4,5},"timestamp":"\\d{4}-[0-1][0-9]-[0-3][0-9]\\s\\d{2}:\\d{2}:\\d{2}"}`
              )
            ) {
              addToQueue(data)
              res.json({
                status: 'success',
                message: 'Logs recieved.'
              })
              res.end()
            } else {
              res.json({
                status: 'failure',
                message:
                  'Logs are of incorrect format. Please check the all fields, and their data. Consult: http://still-oasis-34724.herokuapp.com/help'
              })
              res.end()
            }
          }
          break
        }

        case 'client': {
          if (data.logs.length === 0) {
            res.json({
              status: 'failure',
              message: 'Logs array is empty.'
            })
            res.end()
          } else {
            var st = JSON.stringify(data.logs[0])
            if (
              st.match(
                `{"clientID":\\d{2,6},"accountID":\\d{2,6},"eventType":"[\\w.\\d.\\s]{2,}","timestamp":"[\\w-:\\d.]{4,}"}`
              )
            ) {
              addToQueue(data)
              res.json({
                status: 'success',
                message: 'Logs recieved.'
              })
              res.end()
            } else {
              res.json({
                status: 'failure',
                message:
                  'Logs are of incorrect format. Please check the all fields, and their data. Consult: http://still-oasis-34724.herokuapp.com/help'
              })
              res.end()
            }
          }
          break
        }

        case 'accounts': {
          if (data.logs.length === 0) {
            res.json({
              status: 'failure',
              message: 'Logs array is empty.'
            })
            res.end()
          } else {
            var st = JSON.stringify(data.logs[0])
            if (
              st.match(
                `{"clientID":\\d{2,6},"accountID":\\d{2,6},"accountType":"[\\w]{2,}","eventType":"[\\w\\s]{2,}","timestamp":"\\d{4}-[0-1][0-9]-[0-3][0-9]\\s\\d{2}:\\d{2}:\\d{2}"}`
              )
            ) {
              addToQueue(data)
              res.json({
                status: 'success',
                message: 'Logs recieved.'
              })
              res.end()
            } else {
              res.json({
                status: 'failure',
                message:
                  'Logs are of incorrect format. Please check the all fields, and their data. Consult: http://still-oasis-34724.herokuapp.com/help'
              })
              res.end()
            }
          }
          break
        }

        case 'notif': {
          if (data.logs.length === 0) {
            res.json({
              status: 'failure',
              message: 'Logs array is empty.'
            })
            res.end()
          } else {
            // console.log(JSON.stringify(data.logs))
            var st = JSON.stringify(data.logs[0])
            if (
              st.match(
                `{"clientID":\\d{2,6},"notificationType":"[\\w]{2,}","notificationContent":"[\\w\\s,.]{2,}","timestamp":"\\d{4}-[0-1][0-9]-[0-3][0-9]\\s\\d{2}:\\d{2}:\\d{2}"}`
              )
            ) {
              addToQueue(data)
              res.json({
                status: 'success',
                message: 'Logs recieved.'
              })
              res.end()
            } else {
              res.json({
                status: 'failure',
                message:
                  'Logs are of incorrect format. Please check the all fields, and their data. Consult: http://still-oasis-34724.herokuapp.com/help'
              })
              res.end()
            }
          }
          break
        }

        default: {
          res.json({
            status: 'failure',
            message: 'System incorrect; please check format.'
          })
          res.end()
          break
        }
      }
    }
  }
  // res.writeHead(200, { 'Content-Type': 'text/plain' })
  // res.end(`Failure: Data is not recieved.`)
}

function addToQueue (logSet) {
  logSetQueue.push(logSet)
  // dbManager.run()
}

async function showHelp (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(
    `Content-Type: application/json\n\n` +
      `Log examples: \n\n` +
      `i.Authentication: \n` +
      `{"logs":[{"logType":"cardCreated","cardID":456789,"cardType":"Credit","clientID":789456,"description":"Some Text","success":true,"timestamp":"2019-12-31 16:45:16"}],\n"system":"auth"}\n\n` +
      `ii.ATM Simulation: \n` +
      `{"logs":[{"atmID":123456,"clientID":456789,"timestamp":"2019-12-31 16:45:16","eventType":"Event"}],\n"system":"atm"}\n\n` +
      `iii.Facial Recognition: \n` +
      `{"logs":[{"clientID":123456,"atmID":null,"duration":555,"success","timestamp_":"2019-12-31 16:45:16"}],\n"system":"face"}\n\n` +
      `iv.NFC:\n` +
      `{"logs":[{"clientID":123456,"atmID":456789,"nfcType":"Phone","success":true,"timestamp":"2019-12-31 16:45:16"}],\n"system":"nfc"}\n\n` +
      `v.OTP:\n` +
      `{"logs":[{"cardID":788945,"cardType":"Student","clientID":123456,"eventType":"Password Check","success":false,"timestamp":"2019-12-31 16:45:16"}],\n"system":"otp"}\n\n` +
      `vi.Client Information:\n` +
      `{"logs":[{"clientID":123456,"accountID":123456,"eventType":"Widrawal","timestamp":"2019-12-31 16:45:16"}],\n"system":"client"}\n\n` +
      `vii.Client Accounts:\n` +
      `{"logs":[{"clientID":123456,"accountID":123456,"accountType":"Credit","eventType":"Deposit","timestamp":"2019-12-31 16:45:16"}],\n"system":"accounts"}\n\n` +
      `viii.Notification` +
      `{"logs":[{"clientID":123456,"notificationType":"Email","notificationContent":"Funds are too low. Deposit to keep healthy balance.","timestamp":"2019-12-31 16:45:16"}],\n"system":}\n\n` +
      `\n\nQueries: u15055214@tuks.co.za`
  )
}

module.exports = {
  processData,
  setQueue,
  setDBManager,
  addToQueue,
  showHelp
}
