import React, { useEffect } from 'react'
import http from '../lib/http'
import { useForm } from 'react-hook-form'
import { useParams, useNavigate } from 'react-router-dom' 
import './EditProfile.css'

const EditProfile = () => {
    const { id: userId } = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm()
    useEffect( () => {
        async function fetchUser(){
            const { data } = await http.get(`/api/people/profile/${userId}`) 
            reset(data)
            console.log(data)
        }
        fetchUser()
    }, [])
    const onSubmit = async ({ username, description }) => {
    const payload = {
        username,
        description
    }

    await http.put(`/api/people/editProfile/${userId}`, {data:payload})
    
    navigate(`/profile/${userId}`)
}   
    

  return (
    <div >
        <form onSubmit={handleSubmit(onSubmit)} className='editProfileDiv'>
            <label htmlFor="username" className='editProfileNameLabel'>Name:</label>
            <input 
            type="text" 
            name='username' 
            id='username'
            {...register('username')}
            className='editProfileBox'/>
            <label htmlFor="description" className='editProfileDescriptionLabel'>Description:</label>
            <textarea 
            type="text" 
            name='description' 
            id='description'
            {...register('description')}
            className='editProfileBox editProfileDescriptionBox'
            />
            <button type='submit' className='editProfileBtn'>Edit</button>
        </form>
    </div>
  )
}

export default EditProfile

