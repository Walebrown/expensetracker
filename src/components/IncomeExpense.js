import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

   


 export default function IncomeExpense(){
   const {transactions} =  {
    transactions:[
        {id:1, text: 'flower', amount: -2 },
        {id:2, text: 'salary', amount:300},
        {id:3, text:'Book', amount:-10},
        {id:4, text:'Camera', amount:150}
    ]}

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc,item) => (acc += item), 0)
    .toFixed(2);

    const expense = (amounts
    .filter(item=> item < 0)
    .reduce((acc,item) => (acc += item), 0)* -1)
    .toFixed(2);



    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p data-testid='income' className='money plus'> {income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className='money minus'> {expense}</p>
            </div>
            
        </div>
    )
}


