const router = require('express').Router();
const { checkout, sendMail, setStock } = require('../controllers/checkout.controller.js')

router.post('/', checkout)
router.post('/send', sendMail)
router.put('/stock', setStock)

module.exports = router;