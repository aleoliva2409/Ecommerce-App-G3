const { Router } = require("express");
const {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
  getOrdersByUser
} = require("../controllers/user.controller");

const router = Router();

router.get("/", getAllUsers);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id/orders", getOrdersByUser);

module.exports = router;
