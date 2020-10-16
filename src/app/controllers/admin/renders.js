module.exports = {
    async renderNewOrphanage(req, res) {
        const user = req.session.user
        res.render('pages/admin/NewOrphanage', { onCreateOrphanage: true, user })
    }
}