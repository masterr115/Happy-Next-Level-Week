const db = require('../../models/database/dbusers')
const { insertNewUser, findUser } = require('../../models/database/users')
const { isEmpty } = require('../../../services/isEmpty')
const { encrypt, decrypt } = require('../../../services/cryptDecrypt')


module.exports = {
    async LoginController(req, res) {
        const { email, password } = req.body
        const database = await db;
        const find = await findUser(database, email)
        if (!isEmpty(find)) {
            if (decrypt(find[0].password) == password) {
                req.session.user = find[0]
                res.send({ status: 200, error: false, message: "Logado com sucesso!" })
            } else {
                res.send({ status: 403, error: true, erromessage: "A senha inserida é inválida" })
            }
        } else {
            res.send({ status: 404, error: true, errormessage: "Esta conta não está cadastrada em nosso sistema" })
        }

    },

    async RegisterController(req, res) {
        const { name, lastname, email, password, admin } = req.body
        const database = await db;
        const find = await findUser(database, email)

        if (isEmpty(find)) {

            await insertNewUser(database, name, `${lastname}`, `${email}`, encrypt(password), admin)
            res.send({ status: 201, error: false, message: "Conta criada com sucesso!" })

        } else {

            res.send({ status: 502, error: true, errormessage: "Já existe uma conta com este email" })

        }

    }
}