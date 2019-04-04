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

function convertTimestamp(time){
  var thisTime = time
  var newTime = thisTime.replace(/"/g,'\'')
  return newTime;
}
function cleanString(word){
      var nfcType = word
      var nfc = nfcType.replace(/"/g,'')
      return nfc
}
function getRandom(){
  return Math.floor((Math.random()*10000)+500)
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
  var logType = holder.system

  switch (logType) {
    case 'auth':
      for (i = 0; i < holder.logs.length; i++) {
        var fields = holder.logs[i]
        var logID = getRandom();
        var sql =
          'INSERT INTO public."Authentication"' + ' (\"logID\",\"logType\",\"cardID\",\"cardType\",\"clientID\",\"description\",\"success\",\"timestamp\") VALUES (' +
          logID + ', '+
          JSON.stringify(fields.logType) +
          ', ' +
          JSON.stringify(fields.cardID) +
          ', {' +
          JSON.stringify(fields.cardType) +
          '}, ' +
          JSON.stringify(fields.clientID) +
          ', {' +
          JSON.stringify(fields.description) +
          '}, ' +
          JSON.stringify(fields.success) +
          ', \'' +
          newtime +
          '\')'
       connection.query(sql, function (err, result) {
          if (err) throw err
          console.log('record successfully inserted')
        })
      }
      break
    case 'atm':
      for (i = 0; i < holder.logs.length; i++) {
        var fields = holder.logs[i]
        var logID = getRandom()
        var newtime = convertTimestamp(fields.timestamp)
        var sql =
          'INSERT INTO public."Simulation" (\"logID\",\"atmID\",\"clientID\",\"eventType\",\"eventDescription\",\"extraDetail\",\"timestamp\") VALUES (' +
          logID + ', '+
          JSON.stringify(fields.atmID) +
          ', ' +
          JSON.stringify(fields.clientID) +
          ', {' +
          JSON.stringify(fields.eventType) +
          '}, {' +
          JSON.stringify(fields.eventDescription) +
          '}, {' +
          JSON.stringify(fields.extraDetail) +
          '}, \'' +
          newtime +
          '\')'
         // console.log(sql)
      connection.query(sql, function (err, result) {
          if (err) throw err
          console.log('record successfully inserted')
        })
      }
      break
    case 'face':
      for (i = 0; i < holder.logs.length; i++) {
        var fields = holder.logs[i]
        var logID = getRandom();
        var newtime = convertTimestamp(fields.timestamp)
        var sql =
          'INSERT INTO public."Facial" (\"logID\",\"clientID\",\"atmID\",\"duration\",\"success\",\"timestamp\") VALUES (' +
          logID +  ', '+
          JSON.stringify(fields.clientID) +
          ', ' +
          JSON.stringify(fields.atmID) +
          ', ' +
          JSON.stringify(fields.duration) +
          ', ' +
          JSON.stringify(fields.success) +
          ', \'' +
          newtime +
          '\')'
         // console.log(sql)
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
        var logID = getRandom();
        var newtime = convertTimestamp(fields.timestamp)
        var nfcType = JSON.stringify(fields.nfcType)
        var nfc = nfcType.replace(/"/g,'')
        var sql =
          'INSERT INTO public."NFC" (\"logID\",\"clientID\",\"atmID\",\"nfcType\",success,\"timestamp\") VALUES (' +
          logID + ', '+
          JSON.stringify(fields.clientID) +
          ', ' +
          JSON.stringify(fields.atmID) +
          ', \'{' +
          nfc +
          '}\', ' +
          JSON.stringify(fields.success) +
          ', \'' +
          newtime +
          '\')'
         //console.log(sql)
      connection.query(sql, function (error, rows, fields) {
        if (error) console.log('An error has occured in the query')
        else {
          console.log('Successful query')
        }
        })
      }
      break
    case 'otp':
      for (i = 0; i < holder.logs.length; i++) {
        var fields = holder.logs[i]
        var logID = getRandom();
        var newtime = convertTimestamp(fields.timestamp)
        var sql =
          'INSERT INTO public."OTP" (\"logID\",\"clientID\",\"pin\",\"success\",\"timestamp\")  VALUES (' +
          logID + ', '+
          JSON.stringify(fields.clientID) +
          ', ' +
          JSON.stringify(fields.pin) +
          ', '+
          JSON.stringify(fields.success) +
          ', \'' +
          newtime +
          '\')'
        // console.log(sql)
        connection.query(sql, function (error, rows, fields) {
        if (error) console.log('An error has occured in the query')
        else {
          console.log('Successful query')
        }
        })
      }
      break
    case 'client':
      for (i = 0; i < holder.logs.length; i++) {
        var fields = holder.logs[i]
        logID = getRandom();
        var newtime = convertTimestamp(fields.timestamp)
        var sql =
          'INSERT INTO public."Information" (\"logID\",\"clientID\",\"accountID\",\"eventType\",\"timestamp\") VALUES (' +
          logID + ', ' +
          JSON.stringify(fields.clientID) +
          ', ' +
          JSON.stringify(fields.accountID) +
          ', {' +
          JSON.stringify(fields.event) +
          '}, \'' +
          newtime +
          '\')'
         // console.log(sql)
        connection.query(sql, function (error, rows, fields) {
        if (error) console.log('An error has occured in the query')
        else {
          console.log('Successful query')
        }
        })
      }
      break
    case 'accounts':
      for (i = 0; i < holder.logs.length; i++) {
        var fields = holder.logs[i]
        var logID = getRandom();
        var newtime = convertTimestamp(fields.timestamp)
        var sql =
          'INSERT INTO public."Accounts" (\"logID\",\"clientID\",\"accountID\",\"accountType\",\"eventType\",\"timestamp\") VALUES (' +
          logID + ', ' +
          JSON.stringify(fields.clientID) +
          ', ' +
          JSON.stringify(fields.accountID) +
          ', {' +
          JSON.stringify(fields.accountType) +
          '}, {' +
          JSON.stringify(fields.event) +
          '}, \'' +
          newtime +
          '\')'
          //console.log(sql)
        connection.query(sql, function (error, rows, fields) {
        if (error) console.log('An error has occured in the query')
        else {
          console.log('Successful query')
        }
        })
      }
      break
    case 'notif':
      for (i = 0; i < holder.logs.length; i++) {
        var fields = holder.logs[i]
        var logID = getRandom()
        var newtime = convertTimestamp(fields.timestamp)
        var sql =
          'INSERT INTO public."Notification" (\"logID\",\"notificationType\",\"notificationContent\",\"timestamp\",\"clientID\") VALUES (' +
          logID + ', ' +
          JSON.stringify(fields.notificationType) +
          '}, {' +
          JSON.stringify(fields.content) +
          '}, \'' +
          newtime +
          '\',' +
          JSON.stringify(fields.clientID) +
          ')' 
         // console.log(sql)
        connection.query(sql, function (error, rows, fields) {
        if (error) console.log('An error has occured in the query')
        else {
          console.log('Successful query')
        }
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
