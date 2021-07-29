const { Router } = require("express");
const {
  addReview,
  updateReview,
  getReview,
  deleteReview
} = require("../controllers/review.controller");

const router = Router();

//* Task 54,55,56,57
router.post("/:idProduct/reviews", addReview);
router.get("/:idProduct/reviews", getReview);
router.put("/:idProduct/reviews/:idReview", updateReview);
router.delete("/:idProduct/reviews/:idReview", deleteReview);

module.exports = router;
