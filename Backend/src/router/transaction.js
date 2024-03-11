import { createTransaction, getAllTransaction, getOneTransaction, deleteTransaction, updateTransaction } from "../controller/transaction.js";
import express from "express"

const transaction = express.Router()


transaction.route("/").get(getAllTransaction);
transaction.route("/").post(createTransaction)
transaction.route("/").get(getOneTransaction);
transaction.route("/").delete(deleteTransaction);
transaction.route("/").put(updateTransaction)
export { transaction }