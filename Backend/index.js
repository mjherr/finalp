//Dependencies
require('dotenv').config()
const express = require('express')
const app = express()

//Routes
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/cards', require('./controllers/cards'))

app.get('/', (req, res) => {
    res.render('home')
})

//Wildcard route, must stay at the bottom or it will override
app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)