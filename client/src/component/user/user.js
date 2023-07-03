import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './user.css'
import Data from './data'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function User() {

  return (
  <div className='users'>
    <h3 className='title'>Users</h3>
    <TableContainer component={Paper} className='users'>
      <Table sx={{ minWidth: 850 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Weeks</TableCell>
            <TableCell align="left">Location</TableCell>
            <TableCell align="left">Budget</TableCell>
            <TableCell align="left">CustomerID</TableCell>         
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                <div className="user">
                   <LazyLoadImage src={row.CustomerImage} className='imageAvatar'/>{row.CustomerName}
                </div>
              </TableCell>
              <TableCell align="left">
                <div className='status'>
                  <div className='statusColor' style={{backgroundColor:row.StatusBg,}}></div>
                  {row.Status}
                </div>
              </TableCell>
              <TableCell align="left">{row.Weeks}</TableCell>
              <TableCell align="left">{row.Location}</TableCell>
              <TableCell align="left">{row.Budget}</TableCell>
              <TableCell align="left">{row.CustomerID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
