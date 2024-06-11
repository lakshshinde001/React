import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [color, setColor] = useState('olive');
 
  return (
    <div className='w-full h-screen duration-200 bg-black' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0  px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => setColor("red")}
              className='bg-red-500 px-2 py-1 rounded-3xl'
            >
              Red
            </button>
            <button onClick={ () => setColor("green")}
             className='bg-green-500 px-2 py-1 rounded-3xl cursor-pointer'
            >
              Green
            </button>

            <button className='bg-blue-500 px-2 py-1 rounded-3xl'
            onClick={() => setColor("blue")}>
              Blue
            </button>
          </div>
        </div>
    </div>
  )
  
}

export default App
