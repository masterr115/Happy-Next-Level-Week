'use strict'

const Router = require('express-group-router');
const router = new Router();

const { renderIndex, renderOphanages, renderOphanage } = require('./app/controllers/main/renders')
const { renderNewOrphanage } = require('./app/controllers/admin/renders')

router.group((router) => {
    router.get('/', renderIndex)
    router.get('/orphanages', renderOphanages)
    router.get('/orphanage', renderOphanage)
    router.get('/orphanage/new', renderNewOrphanage)
})

module.exports = router