import React, { useContext } from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { useEffect, useState } from 'react'
import { UserContext } from '../../store/userContext'

const Login = () => {

 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const userCtx = useContext(UserContext)

   const SignIn = () => { 
      const userData = ({ 
           email,
           password
      })
      axios.post("http://localhost:4000/login", userData)
           .then((res) => { 
            console.log(res.data)
            userCtx.updateUser(res.data.id)
            //userCtx.updateUserName(res.data.name)
            setTimeout(() => { 
            navigate(`/welcome/${userCtx.userId}`)
            }, 1000)
           })
           .catch((err) => { 
            console.log(err)
           })
   }

   useEffect(() => { 
        console.log("Modificado a: " + userCtx.userId)
   }, [userCtx.userId])


  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <NavBar/>
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
     
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email 
          </label>
          <div className="mt-2">
            <input   id="email" name="email" type="email" required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
               sm:text-sm sm:leading-6" onChange={(e) => setEmail(e.target.value)}/>
          </div>
        </div>

        <div>
          <div className=" items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="text-sm">
            
            </div>
          </div>
          <div className="mt-2">
            <input  id="password"  name="password"  type="password" required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
              sm:text-sm sm:leading-6" onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>

        <div className='mt-4'>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => SignIn()} >
            Sign in
          </button>
        </div>
      

      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?{' '}
        <a href="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
         Create Account
        </a>
      </p>
    </div>
  </div>
  )
}

export default Login