# MiniProject-Phase3-G9

[![Build Status](https://travis-ci.com/LesegoGomolemo/MiniProject-Phase3-G9.svg?branch=master)](https://travis-ci.com/LesegoGomolemo/MiniProject-Phase3-G9) [![Coverage Status](https://coveralls.io/repos/github/LesegoGomolemo/MiniProject-Phase3-G9/badge.svg?branch=master)](https://coveralls.io/github/LesegoGomolemo/MiniProject-Phase3-G9?branch=master)

###Usage Examples
NodeJS Request
```
var request = require("request");

var options = { method: 'POST',
  url: 'http://still-oasis-34724.herokuapp.com/uploadLog',
  headers: 
   { 'Postman-Token': '58989267-db33-484d-942f-6e5bcb413734',
     'cache-control': 'no-cache',
     'Content-Type': 'application/json' },
  body: 
   { log_set: 
      { logs: 
         [ { logType: 'cardCreated',
             cardID: 7896358962547152,
             cardType: 'Student Debit',
             clientID: 782459825789,
             description: 'Could contain error or success codes',
             success: true,
             timestamp: '2018-21-09:18:45:15' } ],
        system: 'audit' } },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

Java
```
OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{ \"log_set\" :\r\n  {\"logs\": [ { \"logType\": \"cardCreated\", \"cardID\": 7896358962547152, \"cardType\": \"Student Debit\", \"clientID\": 782459825789, \"description\": \"Could contain error or success codes\", \"success\": true, \"timestamp\": \"2018-21-09:18:45:15\" }");
Request request = new Request.Builder()
  .url("http://still-oasis-34724.herokuapp.com/uploadLog")
  .post(body)
  .addHeader("Content-Type", "application/json")
  .addHeader("cache-control", "no-cache")
  .addHeader("Postman-Token", "7190881a-5c97-4e4b-bfff-862af66ca5ef")
  .build();

Response response = client.newCall(request).execute();
```
##Return Examples
```
{
    "status": "success", message:"appropriate response"
}
```
```
{
    "status": "failure", message:"appropriate response"
}
```
