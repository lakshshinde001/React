import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../appwrite/config.js'
import Container from '../Components/Container/Container.jsx'
import PostForm from '../Components/post-form/PostForm.jsx'


function EditPost() {

  const [post, setPost] = useState(null)
  const {slug} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if(slug){
      appwriteService.getPost(slug).then((post) => {
        if(post){
          setPost(post)
        }else{
          navigate("/")
        }
      })
    }
  }, [slug, navigate])


  return (
    <div className='py-6'>
      <Container>
        <PostForm
          post={post}
        />
      </Container>
    </div>
  )
}

export default EditPost