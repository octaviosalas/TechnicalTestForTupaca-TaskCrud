import React, {useRef} from 'react'
import NavBar from './NavBar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { UserContext } from '../../store/userContext'
import StructureAllMyTasks from './StructureAllMyTasks'

const AllMyTasks = () => { 

  const userCtx = useContext(UserContext)
  const [allTasks, setAllTasks] = useState([])
  const [orderByDate, setOrderByDate] = useState([])

  useEffect(() => { 
     axios.get(`http://localhost:4000/getTasks/${userCtx.userId}`)
     .then((res) => {
      console.log(res.data);
      const tasksWithFormattedDate = res.data.map((task) => ({
        ...task,
        formattedDueDate: new Date(task.dueDate).toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }));
      setAllTasks(tasksWithFormattedDate);
    })
          .catch((err) => { 
            console.log(err)
          })
  }, [])

  useEffect(() => { 
      console.log(userCtx.userId)
  }, [])






  return (
    <div>
        <NavBar/>
        <div>
           <h1 className='font-bold'>All Tasks</h1>
        </div>
        <StructureAllMyTasks tasks={allTasks}/>
    </div>
  )
}

export default AllMyTasks
