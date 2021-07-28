const { Router } = require("express");
const {
  addReview,
  updateReview,
  getReview,
  deleteReview
} = require("../controllers/review.controller");

const router = Router();

//* Task 54,55,56,57
router.post("/:idModel/reviews", addReview);
router.get("/:idModel/reviews", getReview);
router.put("/:idModel/reviews/:idReview", updateReview);
router.delete("/:idModel/reviews/:idReview", deleteReview);

module.exports = router;
