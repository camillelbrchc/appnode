let connection = require('../config/db')

class Message {
  static create (content, cb) {
    connection.query('INSERT INTO messages SET content = ?, created_at = ?', [content, new Date()], (error, result) => {
      if (error) throw error;
      console.log("Connected!")
        cb(result)
    })
  }
}

module.exports = Message
