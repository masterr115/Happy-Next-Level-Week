const db = require('../../models/database/db')

module.exports = {
    async renderIndex(req, res) {
        const user = req.session.user
        res.render('pages/main/index', { onIndex: true, user })
    },

    async renderOphanages(req, res) {
        try {
            const database = await db;
            const orphanages = await database.all("SELECT * FROM orphanages")
            const user = req.session.user
            res.render('pages/main/orphanages', { onOrphanages: true, orphanages, user })
        } catch (err) {
            console.log(err.message)
            return res.send('ERROR IN SQL')
        }
    },

    async renderOphanage(req, res) {
        const { id } = req.query
        try {
            const database = await db;
            const result = await database.all(`SELECT * FROM orphanages WHERE id = ${id}`)

            result[0].images = result[0].images.split(',')
            result[0].firstImage = result[0].images[0]

            if (result[0].open_on_weekends == "1") {
                result[0].open_on_weekends = true
            } else {
                result[0].open_on_weekends = false
            }

            res.render('pages/main/orphanage', { onOrphanage: true, orphanage: result[0] })
        } catch (err) {
            console.log(err.message)
            return res.send('ERROR IN SQL')
        }
    },

}