const { Router } = require("express");
const { addWishlist, getWishilistByUser, removeFromWishlist } = require("../controllers/wishlist.controller");

const router = Router();

router.post("/add", addWishlist);
router.get("/:email", getWishilistByUser);
router.put("/remove", removeFromWishlist)



module.exports = router;
