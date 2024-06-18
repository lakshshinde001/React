import {createContext, useContext} from 'react';

const itemsContext = createContext({
    todos :[
        {
            id : 1,
            msg : "Todo message",
            completed : false,
            date : ''
        }
    ],
    addTodo : () => {},
    deleteTodo : () => {},
    updateTodo : () => {},
    markTodo : () => {}
});

export const TodoProvider = itemsContext.Provider;

export const todoContext = () => {
    return useContext(itemsContext);
}