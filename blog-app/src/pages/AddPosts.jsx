import React from 'react'
import Container from '../Components/Container/Container'
import PostForm from '../Components/post-form/PostForm'


const AddPosts = () => {
  return (
    <div className='py-6'>
      <Container>
        <PostForm />
      </Container>
    </div>
  )
}

export default AddPosts