import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios"
import TextField from '@mui/material/TextField';
import Create from '../createProd/create';
import Update from './update';
import './product.css'


export default function UpdateDialog({open,handleClose,id}) {
  const [name, setName] = useState('');
  const api = "https://dashboard-api-v8p2.onrender.com";


  function delate(){
    axios.delate(`${api}/delate`,id)
    .then(res=>res.data);
  }


  return (
    <div>
      <Dialog
        open={open}
        onClose={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='dialogUpdate'
      >
        <DialogTitle id="alert-dialog-title">
          {"Update Product"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <Update handleClose={handleClose} id={id}/>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
