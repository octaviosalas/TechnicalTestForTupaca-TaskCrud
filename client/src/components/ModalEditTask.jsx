import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { useState } from 'react';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const ModalEditTask = ({idUser, description, title, date, idtask }) => {
   console.log(idtask)

  
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const [newTitle, setNewTitle] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const [newDate, setNewDate] = useState("")

    const editMyTask = () => { 
        axios.put("http://localhost:4000/modifiedTask", {title: newTitle, description: newDescription, date: newDate, iduser: idUser, idtask: idtask})
             .then((res) => { 
                console.log(res.data)
             })
             .catch((err) => { 
                console.log(err)
             })
    }

  
    return (
        <>
        
        <div>
            <Button onClick={handleOpen}><ModeEditOutlineIcon/></Button>
            <Modal  open={open} onClose={handleClose} aria-labelledby="parent-modal-title"  aria-describedby="parent-modal-description" >
              <Box sx={{ ...style, width: 400 }}>
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" form action="">
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Task Title
                    </label>
                    <div className="mt-2">
                        <input  id="email" name="email" type="text"  required placeholder={title} onChange={(e) => setNewTitle(e.target.value)}
                        className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                        focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                        />
                    </div>
                    </div>

                    <div>
                    <div className=" items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">  Description </label>
                    </div>
                    <div className="mt-2">
                        <textarea  id="description" name="description" type="text" required placeholder={description} onChange={(e) => setNewDescription(e.target.value)}
                        className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div>
                    <div className=" items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">  Date </label>
                    </div>
                    <div className="mt-2">
                        <input   id="description"  name="description"   type="date" required  onChange={(e) => setNewDate(e.target.value)} 
                        className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>


                    <div className='flex'>
                    <button
                        className="flex w-full m-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"   onClick={() => editMyTask()}>
                        Save Changes
                    </button>
                    
                    </div>
                </form>
    </div>   
              </Box>
            </Modal>
          </div>    
        </>
  
    
        
    )};

export default ModalEditTask

