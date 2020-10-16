module.exports = {
    authPost(req, res, next) {
        if (req.session.user == undefined) {
            return { status: 403, error: true, errormessage: "Você tem que estar logado para adicionar um novo orfanato!" }
        } else {
            next()
        }
    }
}