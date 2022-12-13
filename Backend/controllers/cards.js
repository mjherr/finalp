const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /cards')
})



module.exports = router