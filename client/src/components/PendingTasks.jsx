import React from 'react'
import NavBar from './NavBar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { UserContext } from '../../store/userContext'

const PendingTasks = () => { 

    const [userPendingTasks, setUserPendingTasks] = useState([])
    const [deleteMessage, setDeleteMessage] = useState("")
    const [showDeleteMessage, setShowDeleteMessage] = useState("")
    const [noTasks, setNoTasks] = useState(true)
    const userCtx = useContext(UserContext)

    useEffect(() => { 
        axios.get(`http://localhost:4000/getTasks/${userCtx.userId}`)
             .then((res) => { 
                console.log(res.data)
                if(res.data.length !== 0) { 
                    const docs = res.data
                    const onlyPendingTasks = docs.filter(tasks => tasks.pending === true)
                    setUserPendingTasks(onlyPendingTasks)
                    console.log(onlyPendingTasks)
                } else { 
                  setNoTasks(false)
                }
            
             })
             .catch((err) => { 
                console.log(err)
             })
    }, [])

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
        {noTasks ? 
          <div className='grid grid-cols-3 gap-6'>
            {userPendingTasks.map((t) => ( 
                <div className="card card-compact w-96 bg-base-100 shadow-xl mt-6">
                <div className="card-body">
                    <div className='text-center text-lg'>
                      <h2 className="text-center underline">{t.title}</h2>
                    </div>
                  <p><b>{t.description}</b></p>
                  <div className="card-actions justify-end flex mt-4">
                    <button className='text-indigo-500' onClick={() => deleteTask(t.idtask)}>Delete</button>
                    <button className='text-indigo-500'>In Progress</button>
                      <button className='text-indigo-500'>Done</button>
                    </div>
                  </div>
                </div> 
                ))}
              </div> : <p className='font-bold'>At the moment you dont Have Tasks!</p>}

            <div className='mt-6'>
                 {showDeleteMessage ? <p className='text-indigo-500'>{deleteMessage}</p> : null}
            </div>
        </div>
      
  
  )
}

export default PendingTasks
