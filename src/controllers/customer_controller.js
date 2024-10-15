import * as customerService from "../services/customer_service.js";

async function createCustomer(req, res) {
    const {firstName, lastName, email, phoneNumber, address} = req.body;
    const result = await customerService.createCustomer(firstName, lastName, email, phoneNumber, address);
    res.json(result);
}

async function getCustomers(req, res) {
    res.json(await customerService.getCustomers());
}

async function getCustomer(req, res) {
    const {id} = req.params;
    res.json(await customerService.getCustomer(id));
}

async function updateCustomer(req, res) {
    const {firstName, lastName, email, currentEmail, phoneNumber, address} = req.body;
    const {id} = req.params;
    res.status(200).json(await customerService.updateCustomer(id, firstName, lastName, email, currentEmail, phoneNumber, address));
}

async function deleteCustomer(req, res) {
    const {id} = req.params;
    res.status(200).json(await customerService.deleteCustomer(id));
}

export {createCustomer, getCustomers, updateCustomer, getCustomer, deleteCustomer};