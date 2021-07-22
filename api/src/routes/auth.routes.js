const { Router } = require('express');
const {
  login,

} = require('../controllers/auth.controller');

const router = Router();

router.post('/login', login);
router.post('/logout', login);
router.get('/me', login);
router.post('/promote/:id', login);

module.exports = router;
