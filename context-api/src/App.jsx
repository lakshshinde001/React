import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider.jsx'

function App() {
  
  return (
    <UserContextProvider style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent: 'center'}}>
      <h1>
        This is context Api 
      </h1>
      <Login/>  
      <Profile/>
    </UserContextProvider>
  )
 
}

export default App
