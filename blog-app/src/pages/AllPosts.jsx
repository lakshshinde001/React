import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import Container from '../Components/Container/Container'
import PostCard from '../Components/PostCard'


function AllPosts() {
  const [posts, setPosts] = useState([])


  useEffect(()=> {
    appwriteService.getPosts([]).then((posts) => {
      setPosts(posts.documents)
    })
  }, [])

  if(posts.length === 0) {
    <div className='w-full py-8'>
    <Container>
      <div className='flex flex-wrap'>
        <h1>Log in to see the Content</h1>
      </div>
    </Container>
  </div>
  }

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {
            posts.map((post) => (
              <div className='p-2 w-1/4' key={post.$id}>
                <PostCard
                  {...post}
                />  
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default AllPosts