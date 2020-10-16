'use strict'
require('./services/colors')
require('dotenv').config()


const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')

const helpers = require('./services/helpers')

app.use(express.static('public'))
app.use(cookieParser())

app.use(session({ secret: process.env.APP_AUTHORIZATION_TOKEN, resave: false, saveUninitialized: true, cookie: { maxAge: 3600000 } }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('views', './src/app/views')
app.set('view engine', 'hbs')
app.engine('hbs', expressHandlebars({ handlebars: allowInsecurePrototypeAccess(handlebars), extname: 'hbs', defaultLayout: 'main', helpers }))

const routes = require('./routes').init()
app.use(routes)

app.listen(process.env.APP_PORT, () => console.log(`\n${process.env.APP_NAME} ≈ Serviço Web iniciado com sucesso.\nRodando em: http://localhost:${process.env.APP_PORT}\n`.success))