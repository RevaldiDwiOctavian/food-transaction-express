import express from "express";
import * as customerController from "../controllers/customer_controller.js";
import * as foodController from "../controllers/food_controller.js";
import * as transactionController from "../controllers/transaction_controller.js";

const router = express.Router();

// Customer Routes
router.post("/customer", customerController.createCustomer);
router.get("/customer", customerController.getCustomers);
router.get("/customer/:id", customerController.getCustomer);
router.put("/customer/:id", customerController.updateCustomer);
router.delete("/customer/:id", customerController.deleteCustomer);

// Food Routes
router.post("/food", foodController.createFood);
router.get("/food", foodController.getFoods);
router.get("/food/:id", foodController.getFood);
router.put("/food/:id", foodController.updateFood);
router.delete("/food/:id", foodController.deleteFood);

// Transaction Controller
router.post("/transaction", transactionController.createTransaction);
router.get("/transaction", transactionController.getTransactions);
router.get("/transaction/:id", transactionController.getTransaction);
router.put("/transaction/:id", transactionController.updateTransaction);
router.delete("/transaction/:id", transactionController.deleteTransaction);

export default router;