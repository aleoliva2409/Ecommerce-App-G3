const { Router } = require("express");
const { addWishlist, getWishilistByUser } = require("../controllers/wishlist.controller");

const router = Router();

router.post("/add", addWishlist);
router.get("/:email", getWishilistByUser);



module.exports = router;
