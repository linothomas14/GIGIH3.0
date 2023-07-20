const transactionModel = require('../models/transaction')
const customerModel = require('../models/customer')

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
    transactionModel.transfer(sourceAccount.customerId, destinationAccount.customerId, amount);
    return
}

function readTransaction() {
    transactions = transactionModel.transactions
    return transactions
}

module.exports = {
    transfer,
    readTransaction
}