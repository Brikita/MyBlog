import React, { useEffect, useState } from 'react'
import http from '../lib/http'
import { useParams, Link } from 'react-router-dom'
import './DisplayUser.css'


function DisplayUser() {
    const { id: userId } = useParams()
    //const userId = '64b134853257190d7193809c'
    const [user, setUser] = useState({})

   useEffect( () => {
        async function fetchUser(){
            const { data } = await http.get(`/api/people/profile/${userId}`) 
            setUser(data)
            console.log(data)
        }
        fetchUser()
    }, [])
  return (
    <div>
        <h2 className='profileUserName'>{user.username}</h2>
        <p className='profileDescription'>{user.description}</p> 
        <button className='profileEditButton'><Link to={`/editProfile/${userId}`} className='profileEditLink'>Edit Profile</Link></button>
    </div>
  )
}

export default DisplayUser