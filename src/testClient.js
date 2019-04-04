// We need this to build our post string
var querystring = require('querystring')
var http = require('http')

function PostCode (logData) {
  // Build the post string from an object
  var postData = 'null' /* querystring.stringify({
    log_set: logData
  }) */

  // An object of options to indicate where to post to
  // try to allow for different types of encodings to make things easier for the other group
  var postOptions = {
    host: 'localhost',
    // host: 'still-oasis-34724.herokuapp.com',
    port: 3000,
    // port: '80',
    path: '/uploadLog',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  }

  // Set up the request
  var postReq = http.request(postOptions, function (res) {
    console.log(`STATUS: ${res.statusCode}`)
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`)
    res.setEncoding('utf8')
    res.on('data', function (chunk) {
      console.log(`BODY: ${chunk}`)
    })
    res.on('end', () => {
      console.log('No more data in response.')
    })
  })

  postReq.on('error', e => {
    console.error(`problem with request: ${e.message}`)
  })

  /* postReq.on('socket', s => {
    console.error(`problem with socket: ${s.message}`)
  }) */

  // post the data
  /*
  ERROR:
    '\n\nThe data being sent:\n\n' + querystring.parse(postData) + '\n\n'
                                   ^

    TypeError: Cannot convert object to primitive value
  CODE:
  console.log(
    '\n\nThe data being sent:\n\n' + querystring.parse(postData) + '\n\n'
  ) */
  postReq.write(postData)
  postReq.end()
}

var logs =
  '{ "logs": [ { "logType": "cardCreated", "logData": "stuff1" },{ "logType": "cardCreated", "logData": "stuff5" },{ "logType": "cardCancelled", "logData": "stuff9" }],"system": "audit"}'

PostCode(logs)

module.exports = PostCode
