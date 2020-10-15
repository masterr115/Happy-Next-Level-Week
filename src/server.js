'use strict'
require('./services/colors')
require('dotenv').config()


const express = require('express')
const app = express()
const routes = require('./routes').init()
const handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const helpers = require('./services/helpers')

app.use(routes)
    .use(express.static('public'))
    .set('views', './src/app/views')
    .set('view engine', 'hbs')
    .engine('hbs', expressHandlebars({ handlebars: allowInsecurePrototypeAccess(handlebars), extname: 'hbs', defaultLayout: 'main', helpers }))

app.listen(process.env.APP_PORT, () => console.log(`\n${process.env.APP_NAME} ≈ Serviço Web iniciado com sucesso.\nRodando em: http://localhost:${process.env.APP_PORT}\n`.success))