const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, "amount is required."],
    },
    date: {
      type: Date,
      required: [true, "date is required."],
    },
    description: {
      type: String,
      required: [true, "description is required."],
      trim: true,
    },
    category: {
      type: String,
      enum: ["food", "bills", "entertainment", "shopping", "travel", "other"],
      default: "Other",
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
