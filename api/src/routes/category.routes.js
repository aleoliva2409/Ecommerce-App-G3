const { Router } = require("express");
const {
  addCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} = require("../controllers/category.controller.js");

const router = Router();

router.post("/add", addCategory);
router.get("/", getCategories);
router.delete("/delete/:id", deleteCategory);
router.put("/edit", updateCategory);

module.exports = router;
