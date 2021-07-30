const { Router } = require("express");
const {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
  getOrdersByUser,
  getShippingData,
  updateShippingData
  //login,
} = require("../controllers/user.controller");

const router = Router();

router.get("/", getAllUsers);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id/orders", getOrdersByUser);
router.get('/shipping', getShippingData);
router.put('/shipping/update', updateShippingData);

//router.post("auth/login", login);

module.exports = router;
