import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './order.css'
import Data from './data'
import Avatar from '@mui/material/Avatar';


export default function Order() {
  return (
  <div className='users'>
    <h3 className='title'>Orders</h3>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>item</TableCell>
            <TableCell >CustomerName</TableCell>
            <TableCell >TotalAmount</TableCell>
            <TableCell >Status</TableCell>
            <TableCell >Order ID</TableCell>
            <TableCell >Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                <img src={row.ProductImage} style={{width: '5rem'}}/> 
              </TableCell>
              <TableCell>{row.OrderItems}</TableCell>
              <TableCell >{row.CustomerName}</TableCell>
              <TableCell >{row.TotalAmount}</TableCell>
              <TableCell >
                <div className='status'>
                  <div className='statusColor' style={{backgroundColor:row.StatusBg,}}></div>
                  {row.Status}
                </div>
                
                </TableCell>
              <TableCell >{row.OrderID}</TableCell>
              <TableCell >{row.Location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
