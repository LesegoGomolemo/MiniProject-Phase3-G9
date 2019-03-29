// created by Fulela Mjali
// edited by Lesego Mabe

// node_modules
const { Client } = require('pg')

// attributes
var logSetQueue
const connection = new Client({
  host: 'ec2-50-17-227-28.compute-1.amazonaws.com',
  port: 5432,
  database: 'dc450jaspkpnkf',
  user: 'ocskqdaqjimvsh',
  password: '1c395b29e4e4dedb1baeca9e3e5dd77d72508ac639d595fc2bfb292d79951daf',
  ssl: true
})
// connection.connect()

// operations
function setQueue (queue) {
  logSetQueue = queue
}

function test () {
  connection.connect(function (error) {
    if (!error) {
      console.log('Connected to the database')
    } else {
      console.log('Connection failed')
    }
  })

  connection.query('SELECT * FROM "Simulation"', function (error, rows, fields) {
    if (error) console.log('An error has occured in the query')
    else {
      console.log('Successful query')
      console.log('checkout the rows: ' + JSON.stringify(rows))
      console.log('checkout the fields: ' + fields)
    }
    connection.end()
  })

  console.log('\nDatabase operation is done.')
}

function run () {
  // set a timer for now and call it every now and then

  // connect
  connection.connect(function (error) {
    if (!error) {
      console.log('Connected to the database')
    } else {
      console.log('Connection failed')
    }
  })

  while (true) {
    if (logSetQueue.length != 0) {
      addToDB()
    } else if (logSetQueue.length == 0) {
      break
    }
  }

  connection.end()
}

function addToDB () {
  var holder = logSetQueue.pop()
  console.log(holder.system)
  console.log('ready to insert logs....')
  console.log(holder.logs.length)
  var logType = holder.system

  switch (logType) {
    case 'auth':
      for (i = 0; i < holder.logs.length; i++) {
        var fields = holder.logs[i]
        var sql =
          'INSERT INTO ' +
          JSON.stringify(logType) +
          ' (logType,cardID,cardType,clientID,description,success,timestamp) VALUES (' +
          JSON.stringify(fields.logType) +
          ', ' +
          JSON.stringify(fields.cardID) +
          ', ' +
          JSON.stringify(fields.cardType) +
          ', ' +
          JSON.stringify(fields.clientID) +
          ', ' +
          JSON.stringify(fields.description) +
          ', ' +
          JSON.stringify(fields.success) +
          ', ' +
          JSON.stringify(fields.timestamp) +
          ')'
        connection.query(sql, function (err, result) {
          if (err) throw err
          console.log('record successfully inserted')
        })
      }
      break
    case 'atm':
      for (i = 0; i < holder.logs.length; i++) {
        var fields = holder.logs[i]
        var sql =
          'INSERT INTO atmsimulation (atmID,clientID,eventType,eventDescription,extraDetail,timestamp) VALUES (' +
          JSON.stringify(fields.atmID) +
          ', ' +
          JSON.stringify(fields.clientID) +
          ', ' +
          JSON.stringify(fields.eventType) +
          ', ' +
          JSON.stringify(fields.eventDescription) +
          ', ' +
          JSON.stringify(fields.extraDetail) +
          JSON.stringify(fields.timestamp) +
          ')'
        connection.query(sql, function (err, result) {
          if (err) throw err
          console.log('record successfully inserted')
        })
      }
      break
    case 'face':
      for (i = 0; i < holder.logs.length; i++) {
        var fields = holder.logs[i]
        var sql =
          'INSERT INTO facialRecognition (clientID,atmID,duration,success,timestamp) VALUES (' +
          JSON.stringify(fields.clientID) +
          ', ' +
          JSON.stringify(fields.atmID) +
          ', ' +
          JSON.stringify(fields.duration) +
          ', ' +
          JSON.stringify(fields.success) +
          ', ' +
          JSON.stringify(fields.timestamp) +
          ')'
        connection.query(sql, function (err, result) {
          if (err) throw err
          console.log('record successfully inserted')
        })
      }
      break
    case 'nfc':
      console.log('inserting into ' + logType)
      for (i = 0; i < holder.logs.length; i++) {
        var fields = holder.logs[i]
        // Date.parse(JSON.stringify(fields.timestamp));
        console.log('Time: ' + JSON.stringify(Date.parse(fields.timestamp)))
        var sql =
          'INSERT INTO nfc (clientID,atmID,nfcType,success,timestamp) VALUES (' +
          JSON.stringify(fields.clientID) +
          ', ' +
          JSON.stringify(fields.atmID) +
          ', ' +
          JSON.stringify(fields.nfcType) +
          ', ' +
          JSON.stringify(fields.success) +
          ', ' +
          JSON.stringify(fields.timestamp) +
          ')'
        connection.query(sql, function (err, result) {
          if (err) throw err
          console.log('record successfully inserted')
        })
      }
      break
    case 'otp':
      for (i = 0; i < holder.logs.length; i++) {
        var fields = holder.logs[i]
        var sql =
          'INSERT INTO otp (clientID,pin,timestamp) VALUES (' +
          JSON.stringify(fields.clientID) +
          ', ' +
          JSON.stringify(fields.pin) +
          ', ' +
          JSON.stringify(fields.timestamp) +
          ')'
        connection.query(sql, function (err, result) {
          if (err) throw err
          console.log('record successfully inserted')
        })
      }
      break
    case 'client':
      for (i = 0; i < holder.logs.length; i++) {
        var fields = holder.logs[i]
        var sql =
          'INSERT INTO clientInfo (clientID,accountID,event,timestamp) VALUES (' +
          JSON.stringify(fields.clientID) +
          ', ' +
          JSON.stringify(fields.accountID) +
          ', ' +
          JSON.stringify(fields.event) +
          ', ' +
          JSON.stringify(fields.timestamp) +
          ')'
        connection.query(sql, function (err, result) {
          if (err) throw err
          console.log('record successfully inserted')
        })
      }
      break
    case 'accounts':
      for (i = 0; i < holder.logs.length; i++) {
        var fields = holder.logs[i]
        var sql =
          'INSERT INTO clientAccount (clientID,accountID,accountType,event,timestamp) VALUES (' +
          JSON.stringify(fields.clientID) +
          ', ' +
          JSON.stringify(fields.accountID) +
          ', ' +
          JSON.stringify(fields.accountType) +
          ', ' +
          JSON.stringify(fields.event) +
          ', ' +
          JSON.stringify(fields.timestamp) +
          ')'
        connection.query(sql, function (err, result) {
          if (err) throw err
          console.log('record successfully inserted')
        })
      }
      break
    case 'notif':
      for (i = 0; i < holder.logs.length; i++) {
        var fields = holder.logs[i]
        var sql =
          'INSERT INTO notification (clientID,notificationType,content,timestamp) VALUES (' +
          JSON.stringify(fields.clientID) +
          ', ' +
          JSON.stringify(fields.notificationType) +
          ', ' +
          JSON.stringify(fields.content) +
          ', ' +
          JSON.stringify(fields.timestamp) +
          ')'
        connection.query(sql, function (err, result) {
          if (err) throw err
          console.log('record successfully inserted')
        })
      }
      break
  }
}

module.exports = {
  setQueue,
  test,
  run,
  addToDB
}
