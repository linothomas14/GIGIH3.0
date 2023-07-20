const transactionService = require('../services/transaction')


let postTransaction = (req, res) => {
    try {
        const {
            sourceAccount,
            destinationAccount,
            amount
        } = req.body;
        if (!sourceAccount || !destinationAccount || !amount) {
            throw new Error("Insufficient Parameter")
        }
        transactionService.transfer(sourceAccount, destinationAccount, amount)
        res.status(201).json({
            message: "Transaction created successfully"
        })
    } catch (e) {
        //For example we'll always use code 500 (Internal Server Error)
        res.status(500).json({
            error: e.message
        })
    }
};

let readTransaction = (req, res) => {
    try {

        transactionsResult = transactionService.readTransaction()
        res.status(201).json({
            message: transactionsResult
        })
    } catch (e) {
        //For example we'll always use code 500 (Internal Server Error)
        res.status(500).json({
            error: e.message
        })
    }
};

module.exports = {
    postTransaction,
    readTransaction
}