
const ADDTRANSACTION = 'addTransaction';
const DELETETRANSACTION = 'deleteTransaction';

export const initialState = {
    transactions: [
        { id: 1, text: 'flower', amount: -2 },
        { id: 2, text: 'salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]


}



export const addTransaction = (transaction) => ({
    type: ADDTRANSACTION,
    payload:{
        transaction,
    } 

});

export const deleteTransaction = (id) => ({
    type: DELETETRANSACTION,
    payload:{
        id,
    } 

});



export default function reducer (state = initialState, action){
    switch (action.type) {
        case ADDTRANSACTION:
            return {
                ...state,
                
                transactions: [action.payload.transaction, ...state.transactions]
                
            };
        case DELETETRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !==
                    action.payload.id)
                }
            

        default:
           return state;
    }
}