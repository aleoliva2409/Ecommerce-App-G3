const { Router } = require("express");
const { deleteCategory } = require("../controllers/category.controller");

const router = Router();

router.delete("/delete", deleteCategory);

module.exports = router;