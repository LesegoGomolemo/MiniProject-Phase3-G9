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
            res.json({
              status: 'success',
              message: 'Logs recieved.'
            })
            res.end()
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
            res.json({
              status: 'success',
              message: 'Logs recieved.'
            })
            res.end()
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
            res.json({
              status: 'success',
              message: 'Logs recieved.'
            })
            res.end()
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
            res.json({
              status: 'success',
              message: 'Logs recieved.'
            })
            res.end()
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
            res.json({
              status: 'success',
              message: 'Logs recieved.'
            })
            res.end()
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
            res.json({
              status: 'success',
              message: 'Logs recieved.'
            })
            res.end()
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
            res.json({
              status: 'success',
              message: 'Logs recieved.'
            })
            res.end()
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
            console.log(st)
            if (
              st.match(
                `{"logType":"[\\w.]{2,}","cardID":\\d{2,},"cardType":"[\\w.\\s.\\d]{2,}","clientID":\\d{2,},"description":"[\\w.\\d.\\s]{2,}","success":[\\w.]{4,5},"timestamp":"[\\d.]{4}-[0-3][0-9]-[0-1][0-9]\\s\\d{2}:\\d{2}:\\d{2}"}`
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
                  'Logs are of incorrect format. Please check the all fields, and their data.'
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

  // console.log(logSetQueue.pop().system)
}

async function showHelp (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(`\n\nQueries: u15055214@tuks.co.za`)
}

module.exports = {
  processData,
  setQueue,
  addToQueue,
  showHelp
}
