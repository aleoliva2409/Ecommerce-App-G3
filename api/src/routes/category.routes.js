const { Router } = require("express");

const { addCategory, deleteCategory, getCategories } = require('../controllers/category.controller.js');

const router = Router();

router.post('/add', addCategory);
router.delete("/delete", deleteCategory);
router.get('/', getCategories);

module.exports = router;