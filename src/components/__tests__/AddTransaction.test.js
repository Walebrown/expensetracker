import {render, screen, cleanup, fireEvent} from '@testing-library/react'
import AddTransaction from '../AddTransaction';
import userEvent from '@testing-library/user-event'


describe('initial render to check if addtransaction button is disabled', () => {

test('test if the user can enter an amount and a test', () => {
    const newTransaction = jest.fn()
    const addTransaction = jest.fn()

    const { getByPlaceholderText} = render(<AddTransaction addTransaction={addTransaction(newTransaction)} />);
    const inputValue = "400";

    fireEvent.change(getByPlaceholderText(/enter amount.../i), { target: { value: inputValue } });
     fireEvent.click(screen.getByRole('button', {name:/Add Transaction/i}));
    
     expect(addTransaction).toBeCalled();
    expect(addTransaction).toHaveBeenCalledTimes(1);

    userEvent.type(screen.getByPlaceholderText(/enter amount.../i), '500');
    userEvent.type(screen.getByPlaceholderText(/enter text.../i), 'bread');

  
});
});