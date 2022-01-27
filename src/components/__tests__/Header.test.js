import Header from "../Header";
import * as react from 'react';
import {render, screen, cleanup} from '@testing-library/react'


afterEach(() =>{
    cleanup()
});
describe('testing the header component', ()=>{

    test('renderds the correct content', () => {
        render(<Header/>)
        
        const headerElement = screen.getByRole('heading',{name :/Expense Tracker/i});
        expect(headerElement).toBeInTheDocument();
      
    });
    

});
