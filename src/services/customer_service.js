import prisma from "../prisma.js"

async function createCustomer(firstName, lastName, email, phoneNumber, address) {
    try {
        return await prisma.customer.create({
            data: {
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone_number: phoneNumber,
                address: address,
            }
        });
    } catch (e) {
        console.error(e);
    }
}

async function updateCustomer(id, firstName, lastName, email, currentEmail, phoneNumber, address) {
    try {
        if (currentEmail !== email) {
            const existedEmail = await prisma.customer.findUnique({
                where: {
                    email: email,
                }
            })

            if (existedEmail) {
                console.error("Email already exist");
                return;
            }
        }

        return await prisma.customer.update({
            data: {
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone_number: phoneNumber,
                address: address,
            },
            where: {
                customer_id: parseInt(id),
            }
        });
    } catch (e) {
        console.error(e);
    }
}

async function getCustomers() {
    try {
        return await prisma.customer.findMany();
    } catch (e) {
        console.error(e);
    }
}

async function getCustomer(id) {
    try {
        return await prisma.customer.findUnique({where: {customer_id: parseInt(id)}});
    } catch (e) {
        console.error(e);
    }
}

async function deleteCustomer(id) {
    try {
        return await prisma.customer.delete({where: {customer_id: parseInt(id)}});
    } catch (e) {
        console.error(e);
    }
}

export {
    createCustomer,
    getCustomers,
    updateCustomer,
    getCustomer,
    deleteCustomer
}