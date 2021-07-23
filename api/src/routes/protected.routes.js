const { Router } = require("express");
const { getUser } = require("../controllers/user.controller");
const router = Router();

router.get("/admin", getUser);
router.get("/me", getUser);

module.exports = router;
