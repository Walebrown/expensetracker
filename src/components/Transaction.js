import React from 'react'

import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../redux/ducks/expense';



function Transaction( {transaction}) {
    const dispatch = useDispatch()

    

        const handleDelete = () =>{

            dispatch(deleteTransaction(transaction.id))
        }
    
   
    const sign = transaction.amount < 0 ? '-':"+";
    return (
        <div>
            <li className= {transaction.amount <0 ? 'minus' : 'plus'} key= {transaction.id}>
                     {transaction.text} <span>{sign}${Math.abs( transaction.amount)}</span> 
                    <button  onClick={handleDelete} className='delete-btn'> x</button>
                 </li>
        </div>
    )
}

export default Transaction
