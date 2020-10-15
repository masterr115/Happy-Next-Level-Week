module.exports = {
    async renderNewOrphanage(req, res) {
        res.render('pages/admin/NewOrphanage', { onCreateOrphanage: true })
    }
}