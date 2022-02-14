import {render, screen, cleanup, fireEvent, configure} from '@testing-library/react'
import AddTransaction from '../AddTransaction';
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {initialState, addTransaction} from '../../redux/ducks/expense'

afterEach(cleanup)

function renderWithRedux (
    ui, 
    {initialState, store = createStore(addTransaction, initialState)} = {}
){
    return {
        ...render(<Provider store = {store}>{ui}</Provider>), store
    }
}


describe('initial render to check if addtransaction button is disabled', () => {



test('test if the user can enter an amount and a test', () => {
    const newTransaction = jest.fn()
    const addTransaction = jest.fn()

    const { getByPlaceholderText} = renderWithRedux(<AddTransaction addTransaction={addTransaction(newTransaction)} />);
    const inputValue = "";
   // const inputText = "bread"

    fireEvent.change(getByPlaceholderText(/enter amount.../i), { target: { value: inputValue } });
   // fireEvent.change(getByPlaceholderText(/enter text.../i), { target: { value: inputText } });
   userEvent.type(screen.getByPlaceholderText(/enter amount.../i), '500');
//fireEvent.click(screen.getByRole('button', {name:/Add Transaction/i}));
     
    
     expect(addTransaction).toBeCalled();
    expect(addTransaction).toHaveBeenCalledTimes(1);
    expect(getByPlaceholderText(/enter amount.../i).textContent).toBe("")
  //  expect(getByPlaceholderText(/enter text.../i)).toHaveTextContent("bread")

   

  
});
});