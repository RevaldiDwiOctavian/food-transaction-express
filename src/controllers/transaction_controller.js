import * as transactionService from "../services/transaction_service.js";

async function createTransaction(req, res) {
    const {customerId, foodId, quantity} = req.body;
    const result = await transactionService.createTransaction(customerId, foodId, quantity);
    res.json(result);
}

async function getTransactions(req, res) {
    res.json(await transactionService.getTransactions());
}

async function getTransaction(req, res) {
    const {id} = req.params;
    res.json(await transactionService.getTransaction(id));
}

async function updateTransaction(req, res) {
    const {foodId, quantity} = req.body;
    const {id} = req.params;
    res.status(200).json(await transactionService.updateTransaction(id, foodId, quantity));
}

async function deleteTransaction(req, res) {
    const {id} = req.params;
    res.status(200).json(await transactionService.deleteTransaction(id));
}

export {createTransaction, getTransaction, getTransactions, updateTransaction, deleteTransaction};