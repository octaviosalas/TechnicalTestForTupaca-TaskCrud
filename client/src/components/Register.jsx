import React from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { useEffect, useState } from 'react'


const Register = () => { 

     
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

   const createAccount = () => { 
      const newUser = ({ 
           name,
           email,
           password
      })
      axios.post("http://localhost:4000/register", newUser)
           .then((res) => { 
            console.log(res.data)
            setTimeout(() => { 
                navigate("/login")
            }, 300)
           })
           .catch((err) => { 
            console.log(err)
           })
   }
     

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <NavBar/>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        
          <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Complete Name
              </label>
              <div className="mt-2">
                <input  id="name"  name="name"  type="name" required
                  className="block w-full rounded-md border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setName(e.target.value)}/>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input  id="email" name="email" type="email" required
                  className="block w-full rounded-md border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setEmail(e.target.value)}/>
              </div>
            </div>

            <div>
              <div className=" items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-9000">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input id="password"name="password" type="password" required
                  className="block w-full rounded-md border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>

            <div className='mt-4'>
              <button 
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => createAccount()} >
                Create Account
              </button>
            </div>

            <div className='mt-2'>
             <a href='/login'>I have Account</a>
            </div>
          

          
        </div>
      </div>
  )
}

export default Register
