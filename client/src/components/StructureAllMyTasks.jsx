import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModalDescriptionTask from './ModalDescriptionTask';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import ModalEditTask from './ModalEditTask';
import { useContext } from 'react'
import { UserContext } from '../../store/userContext'
import axios from 'axios';
import { useState } from 'react';

const StructureAllMyTasks = ({tasks}) => {

  const userCtx = useContext(UserContext)
  const [deleteMessage, setDeleteMessage] = useState("")
  const [showDeleteMessage, setShowDeleteMessage] = useState("")

  const deleteTask = (id) => { 
    axios.post("http://localhost:4000/deleteTask", {idtask: id})
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
    <div className='mt-[120px]'> 
        
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 620 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Task Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((t) => (
            <TableRow key={t.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell component="th" scope="row"> {t.title}</TableCell>
              <TableCell align="right">
              <div>
                <ModalDescriptionTask description={t.description} date={t.date}/>
              </div>

              </TableCell>
                <TableCell align="right">{t.date}</TableCell>
                <TableCell><DeleteIcon className='cursor-pointer ml-6' onClick={() => deleteTask(t.idtask)}/></TableCell>
                <TableCell>
                  <ModalEditTask idUser={userCtx.userId} description={t.description} title={t.title} date={t.date} idtask={t.idtask}/>
               </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    {showDeleteMessage ? <p className='font-bold text-2xl mt-6 text-indigo-500 ' >{deleteMessage}</p> : null}
    
       
    </div>
  )
}

export default StructureAllMyTasks
