import { combineReducers, createStore } from "redux";
import expenseReducer from './ducks/expense'


const reducer = combineReducers({
    expense : expenseReducer,

});

const store = createStore(reducer)

export default store