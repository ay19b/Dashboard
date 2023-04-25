import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios"


export default function DelateDialog({open,handleClose,id}) {
  const api = "https://dashboard-api-v8p2.onrender.com";



  
  const handleDelete = async () => {
    try {
      await axios.delete(`${api}/products/${id}`);
      handleClose()
    } catch (error) {
      console.error(error);
    }
  };


  return ( 
      <Dialog
        open={open}
        onClose={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='dialogDelate'
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus className='btnDlt'>
             Delete
          </Button>
        </DialogActions>
      </Dialog>
  );
}
