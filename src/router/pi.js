const express = require('express')
const Pi = require('../models/pi')
const router = new express.Router()

router.get('/pi', async (req, res) => {
    res.send('test')
})