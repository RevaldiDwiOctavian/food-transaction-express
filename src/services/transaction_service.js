import prisma from "../prisma.js"

async function createTransaction(customerId, foodId, quantity) {
    try {
        const foodPrice = await prisma.food.findUnique({
            where: {
                food_id: foodId,
            }
        }).then((i) => {
            return i.price;
        });

        const totalPrice = quantity * foodPrice;

        return await prisma.transaction.create({
            data: {
                customer_id: customerId,
                food_id: foodId,
                quantity: quantity,
                total_price: totalPrice,
            }
        });
    } catch (e) {
        console.error(e);
    }
}

async function updateTransaction(id, foodId, quantity) {
    try {
        const foodPrice = await prisma.food.findUnique({
            where: {
                food_id: foodId,
            }
        }).then((i) => {
            return i.price;
        });

        const totalPrice = quantity * foodPrice;

        return await prisma.transaction.update({
            data: {
                food_id: foodId,
                quantity: quantity,
                total_price: totalPrice,
            },
            where: {
                transaction_id: parseInt(id),
            }
        });
    } catch (e) {
        console.error(e);
    }
}

async function getTransactions() {
    try {
        return await prisma.transaction.findMany({
            include: {
                customer: true,
                food: true
            }
        });
    } catch (e) {
        console.error(e);
    }
}

async function getTransaction(id) {
    try {
        return await prisma.transaction.findUnique({
            where: {
                transaction_id: parseInt(id)
            },
            include: {
                customer: true,
                food: true
            }
        });
    } catch (e) {
        console.error(e);
    }
}

async function deleteTransaction(id) {
    try {
        return await prisma.transaction.delete({where: {transaction_id: parseInt(id)}});
    } catch (e) {
        console.error(e);
    }
}

export {
    createTransaction,
    getTransaction,
    getTransactions,
    updateTransaction,
    deleteTransaction
}