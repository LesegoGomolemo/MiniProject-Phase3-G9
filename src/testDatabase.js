// testing a database connection. Database hosted on Heroku
var pgp = require('pg-promise')(/* options */)

var cn = {
  host: 'ec2-50-17-227-28.compute-1.amazonaws.com', // server name or IP address;
  port: 5432,
  database: 'dc450jaspkpnkf',
  user: 'ocskqdaqjimvsh',
  password: '1c395b29e4e4dedb1baeca9e3e5dd77d72508ac639d595fc2bfb292d79951daf',
  ssl: true
}
// alternative:
// var cn = 'postgres://username:password@host:port/database';

var db = pgp(cn) // database instance;

// select and return user name from id:
db.one('SELECT * FROM "EventDetail";', 123)
  .then(tables => {
    console.log(tables) // print user name;
  })
  .catch(error => {
    console.log(error) // print the error;
  })

console.log('Checking if connected to the database: ' + db.toString())
// 196.248.93.101
