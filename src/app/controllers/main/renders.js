const orphanages = require('../../models/database/fakedata')

module.exports = {
    async renderIndex(req, res) {
        res.render('pages/main/index', { onIndex: true })
    },

    async renderOphanages(req, res) {
        res.render('pages/main/orphanages', { onOrphanages: true, orphanages })
    },

    async renderOphanage(req, res) {
        res.render('pages/main/orphanage', { onOrphanage: true })
    },

}