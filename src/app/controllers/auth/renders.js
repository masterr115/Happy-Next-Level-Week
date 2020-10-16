module.exports = {
    async renderLogin(req, res) {
        const user = req.session.user
        res.render('pages/auth/login', { onLogin: true, user })
    }
}