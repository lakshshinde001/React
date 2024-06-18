import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'


const Todos = () => {

    // const todos = useSelector((state) = state.todos);
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

  return (
    <div className='flex items-center justify-center'>
        <ul className=' flex flex-col list-none p-0 m-0'>
            {
                todos.map((todo) => (
                    <li key={todo.id} className=' shadow-md p-4 w-auto'> {todo.text}
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className=' w-auto p-2 bg-indigo-500 hover:bg-red-500 text-white border rounded-md '
                        >delete</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Todos