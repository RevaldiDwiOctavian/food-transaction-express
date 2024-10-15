import prisma from "../prisma.js"

async function createFood(foodName, description, price) {
    try {
        return await prisma.food.create({
            data: {
                food_name: foodName,
                description: description,
                price: price,
            }
        });
    } catch (e) {
        console.error(e);
    }
}

async function updateFood(id, foodName, description, price) {
    try {
        return await prisma.food.update({
            data: {
                food_name: foodName,
                description: description,
                price: price,
            },
            where: {
               food_id : parseInt(id),
            }
        });
    } catch (e) {
        console.error(e);
    }
}

async function getFoods() {
    try {
        return await prisma.food.findMany();
    } catch (e) {
        console.error(e);
    }
}

async function getFood(id) {
    try {
        return await prisma.food.findUnique({where: {food_id: parseInt(id)}});
    } catch (e) {
        console.error(e);
    }
}

async function deleteFood(id) {
    try {
        return await prisma.food.delete({where: {food_id: parseInt(id)}});
    } catch (e) {
        console.error(e);
    }
}

export {
    createFood,
    getFoods,
    getFood,
    updateFood,
    deleteFood
}