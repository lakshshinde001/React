import React from 'react'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom'

const Github = () => {

    const data = useLoaderData();

  return (
    <div className='text-center bg-gray-500 text-white text-3xl m-4 px-4 py-4'>Follower : {data.followers}
    
    <div  className='flex gap-4 w-full h-auto'>
        <div className='flex items-center justify-center w-1/2'>
        <img className=''
            src={data.avatar_url} width={300} alt='Github Image'
        />

        </div>
        
        <div className=''>
            <h1>Name : {data.name}</h1>
            <p> Bio : {data.bio}</p>
        </div>

    </div>

    </div>
    
  )
}

export default Github

export const GitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/lakshshinde001');
    return response.json();
}