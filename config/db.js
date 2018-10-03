let mysql = require('mysql')

let connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'root',
  database : 'db',
  port : '8080',
});

connection.connect();

module.exports = connection
