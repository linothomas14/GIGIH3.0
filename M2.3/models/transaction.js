const customerModel = require('../models/customer')

let transactions = [{
    transactionId: '123456789',
    sourceId: "12345",
    destinationId: "67890",
    amount: 5.0,
    timestamp: "2023-06-01T00:00:00.000Z"
}];


function transfer(sourceId, destinationId, amount) {
    let sourceAccount = customerModel.getCustomer(sourceId);

    let destinationAccount = customerModel.getCustomer(destinationId);

    if (!sourceAccount || !destinationAccount) {
        throw new Error("Invalid source or destination account");
    }
    if (sourceAccount.balance < amount) {
        throw new Error("Insufficient balance in the source account")
    }
    sourceAccount.balance -= amount;
    destinationAccount.balance += amount;
    createTransaction(sourceAccount.customerId, destinationAccount.customerId, amount);
    return
}

function createTransaction(sourceId, destinationId, amount) {
    const transaction = {
        transactionId: generateTransactionId(),
        sourceId,
        destinationId,
        amount,
        timestamp: new Date().toISOString()
    };
    transactions.push(transaction);
    return transaction;
}

// Helper function to generate a unique transaction ID
function generateTransactionId() {
    // Generate a random string or use a unique ID generation algorithm
    return Math.random().toString(36).substr(2, 9);
}


module.exports = {
    transfer,
    createTransaction,
    transactions
}