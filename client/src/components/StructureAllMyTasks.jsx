import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModalBtn from './ModalBtn';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

const StructureAllMyTasks = ({tasks}) => {
  return (
    <div className='mt-[120px]'> 
        
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 750 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Task Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Mark As Done</TableCell>
            <TableCell align="right">In Progress</TableCell>
            <TableCell align="right">Pending</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((t) => (
            <TableRow key={t.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell component="th" scope="row"> {t.title}</TableCell>
              <TableCell align="right">
              <div>
             <ModalBtn description={t.description} date={t.date}/>
           </div>
              </TableCell>
              <TableCell align="right">{t.date}</TableCell>
              <TableCell align="right"><input type="checkbox"  className="checkbox" /></TableCell>
              <TableCell align="right"><input type="checkbox"  className="checkbox" /></TableCell>
              <TableCell align="right"><input type="checkbox"  className="checkbox" /></TableCell>
              <TableCell><DeleteIcon className='cursor-pointer'/></TableCell>
              <TableCell><ModeEditOutlineIcon className='cursor-pointer'/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
       
    </div>
  )
}

export default StructureAllMyTasks
