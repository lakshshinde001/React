import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice';

const Todos = () => {

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch();
  return (
    <div className='flex'>
        <div className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'>
            {
                todos.map((todo) => (
                    <div className='flex'>
                         <div key={todo.id}> {todo.text}</div>
                         <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                // type='submit'
                                className='text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
                            >
                                Delete
                            </button>

                     </div>
                   
                ))
            }
        </div>
        <div>
           
        </div>
      
 
    </div>
  )
}

export default Todos



// {
//     todos.map((todo) => (
//         <div key={todo.id}> {todo.text}</div>
//     ))
// }