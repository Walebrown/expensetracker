import './App.css';
import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import {Provider} from 'react-redux'
import store from './redux/configureStore'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
        
      </div>
     
    </Provider>
  );
}

export default App;
