import React from 'react'
import NavBar from './NavBar'
import axios from "axios"
import { useState } from 'react'

const CardTask = ({tasks}) => {

    const [deleteMessage, setDeleteMessage] = useState(false)
    const [showDeleneteMessage, setShowDeleteMessage] = useState(false)

    const deleteTask = (idtask) => { 
        axios.post("http://localhost:4000/deleteTask", {idtask: idtask})
             .then(res => { 
                console.log(res.data)
                setDeleteMessage(res.data.message)
                setShowDeleteMessage(true)
                setTimeout(() => { 
                   window.location.reload()
                }, 1500)
             })
             .catch(err => console.log(err))
   }


  return (
    <div>
        <NavBar/>
        <div className='grid grid-cols-1 gap-6 '>
              <div>
            
             </div>
           
                <div className="card card-compact w-96 bg-base-100 shadow-xl mt-6">
                <div className="card-body">
                    <div className='text-center text-lg'>
                      <h2 className="text-center underline">{tasks.title}</h2>
                    </div>
                  <p><b>{tasks.description}</b></p>
                  <div className="card-actions flex mt-4 justify-center items-center">
                        <button className='text-white bg-slate-800' onClick={() => deleteTask(tasks.idtask)}>Delete</button>
                    </div>
                  </div>
                </div> 

                {setShowDeleteMessage ? <p className='font-bold'>{deleteMessage}</p> : null}
                
              </div>
      
    </div>
  )
}

export default CardTask
