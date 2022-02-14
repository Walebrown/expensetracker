import React from 'react'
import { useSelector } from 'react-redux';




function Balance() {


   const transactions = useSelector((state) => state.expense.transactions)

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2);
    return (
        <>
            <h4>Your Balance</h4>
            <h1 data-testid = "balance"> ${total}</h1>
        </>
    )
}

export default Balance


