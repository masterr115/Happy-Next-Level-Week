async function insertNewUser(db, name, lastname, email, password, admin) {
    return await db.run(`INSERT INTO users (
          name, lastname, email, password, admin
          ) VALUES (
            "${name}", 
            "${lastname}", 
            "${email}", 
            "${password}", 
            "${admin}"
          )`)
}

async function findUser(db, email) {
    return await db.all(`SELECT * FROM users WHERE email = '${email}'`)
}

module.exports = { insertNewUser, findUser }