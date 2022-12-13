//Dependencies
require('./Backend/node_modules/dotenv/lib/main').config()
const express = require('express')
const app = express()

//Routes

app.use('/cards', require('./controllers/cards'))

app.get('/', (req, res) => {
    res.send('Hello World')
})

//Wildcard route, must stay at the bottom or it will override
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)