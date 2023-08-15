import React, { useContext } from 'react'
import NavBar from './NavBar'
import { useEffect, useState } from 'react'
import { UserContext } from '../../store/userContext'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Welcome = () => {

    const {userId} = useParams()
    const [userName, setUserName] = useState("")
    const userCtx = useContext(UserContext)

    useEffect(() => {
        setTimeout(() => { 
            axios.get(`http://localhost:4000/getUserById/${userId}`)
            .then((res) => { 
                const docs = res.data
                docs.map((d) => { 
                    setUserName(d.name)
                })
            })   
            .catch((err) => { 
                console.log(err)
            })
        }, 1000) 
    }, [])

    useEffect(() => { 
        console.log(userId)
    }, [])

  return (
    <div>
        <NavBar/>
        <h2 className='text-indigo-600 text-base'>Welcome! <b>{userName}</b> </h2>
    </div>
  )
}

export default Welcome
