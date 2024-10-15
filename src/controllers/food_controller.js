import * as foodService from "../services/food_service.js";

async function createFood(req, res) {
    const {foodName, description, price} = req.body;
    const result = await foodService.createFood(foodName, description, price);
    res.json(result);
}

async function getFoods(req, res) {
    res.json(await foodService.getFoods());
}

async function getFood(req, res) {
    const {id} = req.params;
    res.json(await foodService.getFood(id));
}

async function updateFood(req, res) {
    const {foodName, description, price} = req.body;
    const {id} = req.params;
    res.status(200).json(await foodService.updateFood(id, foodName, description, price));
}

async function deleteFood(req, res) {
    const {id} = req.params;
    res.status(200).json(await foodService.deleteFood(id));
}

export {createFood, getFood, updateFood, getFoods, deleteFood};