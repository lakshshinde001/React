import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {

    const [input, setInput] = useState('');
    const Dispatch = useDispatch();

     const addTodos = (e) => {
        e.preventDefault();
        Dispatch(addTodo(input))
        console.log(input);
        setInput('')
     }
    

  return (
    <form onSubmit={addTodos} className='flex justify-center items-center gap-1'>
        <input
            type='text'
            placeholder='Add Todo'
            className='p-2  text-sm text-gray-700 border border-black rounded'
            onChange={(e) => setInput(e.target.value)}
            value={input}
        />
        <button
            type='submit'
            className='border border-sm border-black bg-indigo-500 p-2 rounded text-white'
        >
            add
        </button>

    </form>
  )
}

export default AddTodo