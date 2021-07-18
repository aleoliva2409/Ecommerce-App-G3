const { Router } = require("express");
const {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
  getOrdersByUser,
  login,
} = require("../controllers/user.controller");

const router = Router();

router.get("/", getAllUsers);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id/orders", getOrdersByUser);
router.post("/login", login);


module.exports = router;
