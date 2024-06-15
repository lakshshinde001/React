import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/AddTodo.jsx'
import Todos from './Components/Todos.jsx'
import { useSelector } from 'react-redux'

function App() {
  
  return (
    <div className='flex flex-col justify-center items-center'>
      <AddTodo/>
      <Todos/>

    </div>
    
  )
}

export default App
