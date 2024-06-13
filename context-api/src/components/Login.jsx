import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext';
import UserContextProvider from '../context/UserContextProvider';

const Login = () => {

    const [username, SetUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password})
    }



  return (
    <div>
        <h2>Login </h2>
        <input
            type='text'
            value = {username}
            onChange={(e) => SetUsername(e.target.value)}
            placeholder='Username'
        />
        <input
            type='password'
            value = {password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
        />

        <button onClick={handleSubmit}>
            Submit
        </button>
    </div>
  )
}

export default Login