import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz";

    if(charAllowed ) str += "!@#$%^&*()_+";
    if(numAllowed) str += "1234567890";

    for(let i=0; i<length; i++){
      const char = Math.floor(Math.random() * str.length+1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed])

  useEffect(() => {
    // generatePassword();
  }, [length, charAllowed, numAllowed])

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = ()=> {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }

    return(
      <div className=' text-orange-500'>
        <div className='w-full  max-w-md mx-auto shadow-md rounded-3xl px-4 py-3 my-8 bg-gray-800  '>
          <div className='text-center text-white my-3'> Password Generator  </div>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input
            type='text'
            // className='outline-none w-full py-1 px-3'
            className='outline-none w-full py-1 px-3'
            value={password}
            placeholder='Generate password'
            readOnly
            ref={passwordRef}
            />
            <button onClick={copyPasswordToClipboard} 
            className='outline-none bg-blue-700 shrink-0 py-0.5 px-3 text-white'>
            Copy
            </button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1 ' >
              <input
                type='range'
                min={6}
                max={20}
                value={length}
                className='cursor-pointer'
                onChange={(e) => setLength(e.target.value)}
              />
              <label htmlFor='length' >
                length:{length}
              </label>

            </div>
            <div className='flex item-center gap-x-1'>
              <input
                type='checkbox'
                defaultChecked={numAllowed}
                onChange={() => {
                  setNumAllowed((prev) => !prev)
                }}
              />
              <label htmlFor='number'>
                Numbers
              </label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                defaultChecked= {charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}

              />
              <label htmlFor='character'>
                Characters
              </label>
            </div>
          </div>

        </div>
      </div>
    )
}

export default App
