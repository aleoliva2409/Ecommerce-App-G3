const router = require('express').Router();
const { checkout } = require('../controllers/checkout.controller.js')

router.post('/', checkout)

module.exports = router;