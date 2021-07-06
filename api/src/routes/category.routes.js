const { Router } = require("express");
const { addCategory } = require('../controllers/category.controller.js');

const router = Router();

router.post('/add', addCategory);

module.exports = router;