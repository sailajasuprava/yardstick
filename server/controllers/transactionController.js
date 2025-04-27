const Transaction = require("../models/transactionModel");
const AppError = require("../utils/appArror");

const getAllTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    if (!transactions) {
      return next(new AppError("No transactions found", 404));
    }

    res.status(200).json({
      status: "success",
      results: transactions.length,
      data: transactions,
    });
  } catch (err) {
    next(err);
  }
};

const getTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.transactionId);

    if (!transaction) {
      return next(new AppError("No transaction found with that Id", 404));
    }

    res.status(200).json({
      status: "success",
      data: transaction,
    });
  } catch (err) {
    next(err);
  }
};

const createTransaction = async (req, res, next) => {
  try {
    const { amount, date, description, category } = req.body;
    const newTransaction = await Transaction.create({
      amount,
      date,
      description,
      category,
    });

    res.status(201).json({
      status: "success",
      message: "Transaction created successfully",
      data: newTransaction,
    });
  } catch (err) {
    next(err);
  }
};

const updateTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.transactionId,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!transaction) {
      return next(new AppError("No transaction found with that Id", 404));
    }

    res.status(200).json({
      status: "success",
      message: "Transaction updated successfully",
      data: transaction,
    });
  } catch (err) {
    next(err);
  }
};

const deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(
      req.params.transactionId
    );

    if (!transaction) {
      return next(new AppError("No transaction found with that Id", 404));
    }

    res.status(200).json({
      status: "success",
      message: "Transaction deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllTransactions,
  getTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};
