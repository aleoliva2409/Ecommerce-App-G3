const { Router } = require("express");

const { addCategory, deleteCategory } = require('../controllers/category.controller.js');

const router = Router();

router.post('/add', addCategory);
router.delete("/delete", deleteCategory);

module.exports = router;