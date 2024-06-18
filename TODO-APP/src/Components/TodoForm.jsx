import React, {useState} from 'react'
import { todoContext } from '../context/TodoContext';

const TodoForm = () => {

    const [todo, setTodo] = useState("");
    const {addTodo} = todoContext();

    const [datee, setDate] = useState('');

    const add = () => {
        e.preventDefault();
        if(!todo || !datee) return;
        addTodo({todo, date: datee})
        setTodo('')
    }



  return (
    <form onSubmit={add} className='flex' >
        <input
            type='text'
            placeholder='Enter Task'
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
        />
        <input
            type='date'
            onChange={(e) => setDate(e.target.value)}
            placeholder="yyyy-mm-dd"
            className='text-black text-sm p-2 '
        />
        <button className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0' type='submit'>
            Add
        </button>
    </form>
  )
}

export default TodoForm