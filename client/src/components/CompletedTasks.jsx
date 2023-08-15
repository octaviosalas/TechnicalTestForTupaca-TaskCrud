import React from 'react'
import NavBar from './NavBar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { UserContext } from '../../store/userContext'

const CompletedTasks = () => { 

    const [userCompletedTasks, setUserCompletedTasks] = useState([])
    const [noTasks, setNoTasks] = useState(true)
    const userCtx = useContext(UserContext)

    useEffect(() => { 
        axios.get(`http://localhost:4000/getTasks/${userCtx.userId}`)
             .then((res) => { 
                console.log(res.data)
                    const docs = res.data
                    const onlyCompletedTasks = docs.filter(tasks => tasks.pending === false && tasks.inProgres === false && tasks.done === true)
                    if(onlyCompletedTasks.length !== 0) { 
                        setUserCompletedTasks(onlyCompletedTasks)
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
          <div className='grid grid-cols-1 gap-6 '>
              <div>
                <h1 className='font-bold'>Tasks Completed</h1>
             </div>
            {userCompletedTasks.map((t) => ( 
                <div className="card card-compact w-96 bg-base-100 shadow-xl mt-6">
                <div className="card-body">
                    <div className='text-center text-lg'>
                      <h2 className="text-center underline">{t.title}</h2>
                    </div>
                  <p><b>{t.description}</b></p>
                  <div className="card-actions flex mt-4 justify-center items-center">
                        <button className='text-indigo-500' onClick={() => deleteTask(t.idtask)}>Delete</button>
                    </div>
                  </div>
                </div> 
                ))}
              </div> : <p className='font-bold'>At the moment you dont Have Tasks!</p>}

           
        </div>
      
  
  )
}

export default CompletedTasks;
