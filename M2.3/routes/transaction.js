// routes/transaction.js

const express = require('express')
const router = express.Router()
const transactionController = require('../controllers/transaction')

router.post('/transactions', transactionController.postTransaction)
router.get('/transactions', transactionController.readTransaction)
module.exports = router