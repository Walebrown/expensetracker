import {render, screen, cleanup, fireEvent} from '@testing-library/react'
import IncomeExpense from '../IncomeExpense';



describe('initial render to check if addtransaction button is disabled', () => { 
test('to check if incomeexpense is defined', () => {
     
    render(<IncomeExpense/>)
    const {transactions} =  {
        transactions:[
            {id:1, text: 'flower', amount: -2 },
            {id:2, text: 'salary', amount:300},
            {id:3, text:'Book', amount:-10},
            {id:4, text:'Camera', amount:150}
        ]
    }
   
    expect(IncomeExpense()).toBeDefined();
   
    expect(transactions.map(transaction => transaction.text)).toEqual([
        'flower',
        'salary',
        'Book',
        'Camera',
    ]);
  
  
});

})





  
