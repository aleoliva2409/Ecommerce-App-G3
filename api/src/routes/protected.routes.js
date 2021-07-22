const { Router } = require("express");
const { example } = require("../controllers/user.controller");
const router = Router();

router.get("/admin", example);
router.get("/me", example);

module.exports = router;
