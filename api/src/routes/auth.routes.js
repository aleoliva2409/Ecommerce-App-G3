const { Router } = require('express');
const {
  authLogin,

} = require('../controllers/auth.controller');

const router = Router();

router.post('/login', authLogin);
router.post('/logout', authLogin);
router.get('/me', authLogin);
router.post('/promote/:id', authLogin);

module.exports = router;
