import React,{useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './user.css'
import Data from './data'
import Skeleton from '@mui/material/Skeleton';


export default function User() {
  const [data, setData] = useState(Data);


  const handleImageLoad = (itemId) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.CustomerID === itemId ? { ...item, loading: true } : item
      )
    );
  };

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
          {data.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                <div className="user">
                  {!row.loading && <Skeleton variant="rectangular" className='imageAvatar' />}
                  <img
                    src={row.CustomerImage}
                    alt=''
                    className='imageAvatar'
                    onLoad={() => handleImageLoad(row.CustomerID)}
                    style={{ display: row.loading ? "block" : "none" }}
                  />{row.CustomerName}
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
