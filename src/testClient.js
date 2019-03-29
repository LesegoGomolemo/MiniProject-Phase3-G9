// We need this to build our post string
var querystring = require('querystring')
var http = require('http')

function PostCode (logData) {
  // Build the post string from an object
  var postData = querystring.stringify({
    log_set: logData
  })

  // An object of options to indicate where to post to
  var postOptions = {
    host: 'localhost',
    port: '3000',
    path: '/uploadLog',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  }

  // Set up the request
  var postReq = http.request(postOptions, function (res) {
    res.setEncoding('utf8')
    res.on('data', function (chunk) {
      console.log('Response: ' + chunk)
    })
  })

  // post the data
  console.log(querystring.parse(postData))
  postReq.write(postData)
  postReq.end()
}

var logs =
  '{ "logs": [ { "logType": "cardCreated", "logData": "stuff1" },{ "logType": "cardCreated", "logData": "stuff5" },{ "logType": "cardCancelled", "logData": "stuff9" }],"system": "audit"}'

PostCode(logs)

module.exports = PostCode
