const express = require('express')
const router = express.Router()
const clicks = require('../data/clicks')

router.get('/', (req, res) => {
  const count = clicks.getClickCount()
  res.json({ count })
})

router.post('/', (req, res) => {
    const newCount = clicks.incrementClick()
    res.json({ newCount })
})

module.exports = router;
