import React, {useRef} from 'react'
import NavBar from './NavBar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import uniqid from "uniqid"
import { UserContext } from '../../store/userContext'

const CrateNewTask = () => {


   const [title, setTitle] = useState("")
   const [description, setDescription] = useState("")
   const [date, setDate] = useState("")

   
   const userContext = useContext(UserContext)
   const userid = userContext.userId
   const formRef = useRef();  

   const saveMyTask = () => { 
    const newTask = ( { 
      title: title,
      description: description,
      date: date,
      iduser: userid,
      idtask: uniqid(),
    })
    axios.post("http://localhost:4000/saveNewTask", newTask)
         .then((res) => { 
          console.log(res.data)
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
        Create new Task
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" form action="" ref={formRef}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Task Title
          </label>
          <div className="mt-2">
            <input  id="email" name="email" type="text"  required
              className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
               focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className=" items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">  Description </label>
          </div>
          <div className="mt-2">
            <textarea  id="description" name="description" type="text" required
              className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setDescription(e.target.value)}/>
          </div>
        </div>

        <div>
          <div className=" items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">  Date </label>
          </div>
          <div className="mt-2">
            <input   id="description"  name="description"   type="date" required
              className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setDate(e.target.value)} />
          </div>
        </div>


        <div className='flex'>
          <button
            className="flex w-full m-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => saveMyTask()}
          >
            Save
          </button>
          <button className="flex w-full m-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            To Rewrite
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?{' '}
        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Start a 14 day free trial
        </a>
      </p>
    </div>
  </div>
  )
}

export default CrateNewTask
