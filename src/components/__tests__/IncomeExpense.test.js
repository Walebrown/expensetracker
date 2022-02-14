import {render, screen, cleanup, fireEvent} from '@testing-library/react'
import IncomeExpense from '../IncomeExpense';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  { addTransaction, initialState} from '../../redux/ducks/expense'
import expenseReducer from '../../redux/ducks/expense'

import * as redux from 'react-redux'






function renderWithRedux (
    ui, 
    {initialState, store = createStore(expenseReducer, initialState)} = {}
){
    return {
        ...render(<Provider store = {store}>{ui}</Provider>), store
    }
}


describe('initial render to check if addtransaction button is disabled', () => { 
//   const useSelectorMock =  jest.spyOn(redux, 'useSelector')
//   const useDispatchMock = jest.spyOn(redux, 'useDispatch')

//   beforeEach(() => {
//     useSelectorMock.mockClear()
//     useDispatchMock.mockClear()
// })

    
test('to check if income expense is defined', () => {
//     const transactions = jest.fn()
//     useSelectorMock.mockReturnValue(transactions)
    
    
    

//     //renderWithRedux(<IncomeExpense/>)
//     const {getByTestId} = renderWithRedux(<IncomeExpense/>)
        
//    // const balanceElement = screen.getByTestId('income');
//     expect(getByTestId('income')).toBeInTheDocument();


     
   
   
    
   
   
  
});

})





  
