const { Router } = require('express');
const {
  login,
  logout,
} = require('../controllers/auth.controller');

const router = Router();

router.post('/login', login);
router.get('/logout', logout);
router.post('/promote/:id', login);

module.exports = router;
