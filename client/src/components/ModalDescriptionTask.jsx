import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

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
const ModalDescriptionTask = ({description, date}) => {
  
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

  
    return (
        <>
        
        <div>
            <Button onClick={handleOpen}>View Task</Button>
            <Modal  open={open} onClose={handleClose} aria-labelledby="parent-modal-title"  aria-describedby="parent-modal-description" >
              <Box sx={{ ...style, width: 400 }}>
                <p className='text-center'>Task Date: {date}</p>
                <h2 id="parent-modal-title" className='text-center mt-4'><b>{description}</b></h2>      
              </Box>
            </Modal>
          </div>    
        </>
  
    
        
    )};

export default ModalDescriptionTask

