import React, { useState } from 'react';
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
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton from '@mui/material/Skeleton';


export default function Order() {
  const [data, setData] = useState(Data);


  const handleImageLoad = (itemId) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, loading: true } : item
      )
    );
  };

  return (
  <div className='users'>
    <h3 className='title'>Orders</h3>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 850 }} aria-label="simple table">
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
          {data.map((row) => {
            const { OrderID, OrderItems, CustomerName, TotalAmount, ProductImage, Name, loading } = row;
        
            return (
              <TableRow
                key={Name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {loading && <Skeleton variant="rectangular" className='imageProd' />}
                  <img
                    src={ProductImage}
                    alt=''
                    className='imageProd'
                    onLoad={() => handleImageLoad(OrderID)}
                    style={{ display: !loading ? "block" : "none" }}
                  />
                </TableCell>
                <TableCell>{OrderItems}</TableCell>
                <TableCell>{CustomerName}</TableCell>
                <TableCell>{TotalAmount}</TableCell>
                <TableCell>
                  <div className='status'>
                    <div className='statusColor' style={{ backgroundColor: row.StatusBg }}></div>
                    {row.Status}
                  </div>
                </TableCell>
                <TableCell>{OrderID}</TableCell>
                <TableCell>{row.Location}</TableCell>
              </TableRow>
            );
          })}
</TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
