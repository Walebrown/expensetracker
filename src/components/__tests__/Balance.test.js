import * as react from 'react';
import {render, screen, cleanup} from '@testing-library/react'

import Balance from "../Balance";

afterEach(() =>{
    cleanup()
});
describe('testing the balance component', ()=>{

    test('renderds the correct content', () => {
        render(<Balance/>)
        
        const balanceElement = screen.getByTestId('balance');
        expect(balanceElement).toBeInTheDocument();
      
    });
    

});
