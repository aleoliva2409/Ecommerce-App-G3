const { Router } = require("express");
const { example } = require("../controllers/user.controller");
const router = Router();

router.get("/profile", example);


module.exports = router;
