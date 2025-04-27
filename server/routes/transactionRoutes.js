const express = require("express");
const {
  getAllTransactions,
  createTransaction,
  getTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

const router = express.Router();

router.route("/").get(getAllTransactions).post(createTransaction);
router
  .route("/:transactionId")
  .get(getTransaction)
  .patch(updateTransaction)
  .delete(deleteTransaction);

module.exports = router;
