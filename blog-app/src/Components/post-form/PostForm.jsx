import React, {useCallback, useId} from 'react'
import {set, useForm} from 'react-hook-form'
import Button from '../Button.jsx'
import Input from '../Input.jsx'
import RTE from '../RTE.jsx'
import Select from '../Select.jsx'
import appwriteService from '../../appwrite/config.js'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom';

export default function PostForm ({post}){
  const {register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues : {
      title : post?.title || "",
      slug : post?.slug || "",
      content : post?.content || "",
      status : post?.status || "active"
    }
  })
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const submit = async (data) => {
    if(post){
      const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null

      if(file){
        appwriteService.deletFile(data.featuredImage)
      }
      const dbPost = await appwriteService.updatePost(
        post.$id,
        {...data,
        featuredImage : file? file.$id : undefined}
      )
      if(dbPost){
        navigate(`/post/${dbPost.$id}`)
      }
    }else{
      const file = await appwriteService.uploadFile(data.image[0])
      if(file){
        const fileId = file.$id
        data.featuredImage = fileId;
        const dbPost = await appwriteService.createPost({...data, useId : userData.$id})
        if(dbPost){
          navigate(`/post/${dbPost.$id}`)
        }
      }
    }
  }
  const slugTransform = useCallback((value) => {
    if(value && typeof value === 'string'){
      return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s] + /g, '-').replace(/\s/g,"-");
    }
  }, [])

  React.useEffect(() => {
    watch((value, {name}) => {
      if(name === 'title'){
        setValue("slug", slugTransform(value.title), {shouldValidate:true})
      }
    }) 
  }, [watch, setValue, slugTransform])
  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
      <div className='w-2/3 px-2 '>
        <Input
          label="Title"
          placeholder="title"
          className='mb-4'
          {...register("title", {required : true})}
        />
        <Input
          label="Slug"
          placeholder="slug"
          className='mb-4'
          {...register("slug", {required : true})}
          onInput={(e) =>{
            setValue("slug", slugTransform(e.currentTarget.value),
          {shouldValidate:true})
          }}
        />
        <RTE
          label= "Content: "
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className='w-1/3 px-2'>
          <Input
            label = "featured Image"
            type = 'file'
            className = 'mb-4'
            accept = "image/png image/jpg image/jpeg"
            {...register("image", {required:!post})}
          />
          {post && (
            <div className='w-full mb-4'> 
              <img src={appwriteService.getFilePreview(post.featuredImage)} alt={post.title}
              className='rounded-lg'
              />
            </div>
          )}
          <Select
            options = {["active", "inactive"]}
            label = "Status"
            className = 'mb-4'
            {...register("status", {required:true})}
          />
          <Button
            type='submit'
            bgColor={post? "bg-green-500" : undefined}
            className='w-full'
          > 
           {post ? "Update" : "Submit"}
          </Button>
      </div>
    </form>
  )
}