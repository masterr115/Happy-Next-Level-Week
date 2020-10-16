require('../../../services/colors')
const database = require('sqlite-async')
const path = require('path')

function createTable(db) {
    return db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        lastname TEXT,
        email TEXT UNIQUE,
        password TEXT,
        admin TEXT
      );
    `)
}


module.exports = database.open(path.join(__dirname, '../users.sqlite')).then(createTable)