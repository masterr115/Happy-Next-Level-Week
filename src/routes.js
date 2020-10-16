'use strict'

const Router = require('express-group-router');
const router = new Router();

const { renderIndex, renderOphanages, renderOphanage } = require('./app/controllers/main/renders')
const { renderNewOrphanage } = require('./app/controllers/admin/renders')
const { renderLogin } = require('./app/controllers/auth/renders')

const { RegisterController } = require('./app/controllers/auth/controllers')
const { LoginController } = require('./app/controllers/auth/controllers')
const { insertOrphanageController } = require('./app/controllers/admin/controllers')

const { authPost } = require('./middlewares/authpost')

router.group(router => {
    router.get('/', renderIndex)
    router.get('/orphanages', renderOphanages)
    router.get('/orphanage', renderOphanage)
    router.get('/orphanage/new', renderNewOrphanage)
    router.get('/login', renderLogin)
})

router.group('/account', router => {
    router.post('/login', LoginController)
    router.post('/register', RegisterController)
})

router.group('/orphanage', router => {
    //router.use(authPost)
    router.post('/new', insertOrphanageController)
})

module.exports = router