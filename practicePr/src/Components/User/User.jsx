import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {

    const {userid} = useParams();
  return (
    <div className='text-center m-4 bg-gray-500 text-white py-4 text-3xl'>User:{userid}</div>
  )
}

export default User