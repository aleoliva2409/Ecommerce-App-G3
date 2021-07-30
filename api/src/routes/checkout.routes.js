const router = require('express').Router();
const { checkout, sendMail } = require('../controllers/checkout.controller.js')

router.post('/', checkout)
router.post('/send', sendMail)

module.exports = router;