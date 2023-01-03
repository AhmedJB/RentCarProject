import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#ffffff',
    border: '2px solid var(--mainBlue)',
    boxShadow: 24,
    p: 4,
    borderRadius:3,
  };

function ModalComp(props) {
  return (
    <Modal
        open={props.open}
        onClose={props.handleClose}
      >
        <Box sx={style}>
          {props.children}
        </Box>
      </Modal>
  )
}

export default ModalComp