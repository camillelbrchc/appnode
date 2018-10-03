let mysql = require('mysql')

let connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'bi8H52mh_cAZ*]!%hUu9Ur9Qr7~',
  database : 'appnodedb.messages'
});

connection.connect();

module.exports = connection
