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
import Avatar from '@mui/material/Avatar';
import admin from '../../images/admin.webp'
import { makeStyles} from '@mui/styles'


export default function User() {

  return (
  <div className='users'>
    <h3 className='title'>Users</h3>
    <TableContainer component={Paper} className='users'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Weeks</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Budget</TableCell>
            <TableCell align="right">CustomerID</TableCell>
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
                   <Avatar src={row.CustomerImage} style={{marginRight:'10px'}}/>{row.CustomerName}
                </div>
              </TableCell>
              <TableCell align="right">
                <div className='status'>
                  <div className='statusColor' style={{backgroundColor:row.StatusBg,}}></div>
                  {row.Status}
                </div>
                
                </TableCell>
              <TableCell align="right">{row.Weeks}</TableCell>
              <TableCell align="right">{row.Location}</TableCell>
              <TableCell align="right">{row.Budget}</TableCell>
              <TableCell align="right">{row.CustomerID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
