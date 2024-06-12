import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/lakshshinde001')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])

    const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl relative'>Github Followers : {data.followers}
 
   
    <div className='flex'>
        <img src={data.avatar_url} width={300} alt='Github Image'/>
        <div>
            <h1>Name : {data.name}</h1>
            <h2>Bio: {data.bio}</h2>
        </div>      
    </div>
    
    </div>

    
  )
}

export default Github

export const githubLoader = async () =>{
    const response = await fetch('https://api.github.com/users/lakshshinde001');
    return response.json();
}