import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './product.css'
import {ImAirplane, ImPencil} from "react-icons/im"
import {BsTrash} from "react-icons/bs"
import axios from "axios"
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import DelateDialog from './delateDialog';
import UpdateDialog from './updateDialog';
import { Link } from "react-router-dom";


export default function Product() {
  const [prod, setProd] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");
  const api = "https://dashboard-api-v8p2.onrender.com"; 
  const [delate, setDelate] = useState(false);
  const [open,setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  
  const handleClickDelate = (i) => {
    setDelate(true);
    setId(i)
  };

  const handleCloseDelate = () => {
    setDelate(false);
  };

  const handleClickUpdate = (i) => {
    setOpen(true);
    setId(i)
  };

  const handleCloseUpdate = () => {
    setOpen(false);
  };


  useEffect(() => {
    axios.get(`${api}/products`)
      .then(res => {
        setProd(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [prod]);



  return (
    <div className='products'>
    <h3 className='title'>Products</h3>
    {!loading?
    <div className='filterProd'>
      <h3>Filters :</h3> 
      <button 
           className={`btnFilter ${selectedCategory === '' ? 'active' : ''}`} 
           onClick={() => handleCategoryChange('')}>All</button>
      <button 
           className={`btnFilter ${selectedCategory === 'Supermarché' ? 'active' : ''}`}
           onClick={() => handleCategoryChange('Supermarché')}>Supermarché</button>
      <button 
           className={`btnFilter ${selectedCategory === 'Mode' ? 'active' : ''}`}
           onClick={() => handleCategoryChange('Mode')}>Mode</button>
      <button 
           className={`btnFilter ${selectedCategory === 'Informatique' ? 'active' : ''}`}
           onClick={() => handleCategoryChange('Informatique')}>Informatique</button>
      <button 
           className={`btnFilter ${selectedCategory === 'Électroménager, TV & Audio' ? 'active' : ''}`} 
           onClick={() => handleCategoryChange('Électroménager, TV & Audio')}>Électroménager, TV & Audio</button>
      <button 
           className={`btnFilter ${selectedCategory === 'Articles de sport' ? 'active' : ''}`}
           onClick={() => handleCategoryChange('Articles de sport')}>Articles de sport</button>
    </div>: <div className='filterProd'><Skeleton animation="wave" /></div>}
    
    {!loading? 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>product</TableCell>
            <TableCell >Category</TableCell>
            <TableCell >price</TableCell>
            <TableCell >stock</TableCell>
            <TableCell ></TableCell>
          </TableRow>
        </TableHead>
        {prod.length>0?
        <TableBody>
          {prod
          .filter((row) => selectedCategory === '' || row.category === selectedCategory)
          .map((row) => (
            <>
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                
                {row.images[0] ? (
                  <img src={row.images[0].url} style={{width: '5rem'}}/>
                ) : (
                 <p>Image not found</p>
                )}
              </TableCell>
              <TableCell><span className='prod'>{row.name}</span></TableCell>
              <TableCell >{row.category}</TableCell>
              <TableCell >{row.price}DA</TableCell>
              <TableCell >{row.stock}</TableCell>
              <TableCell>
                <div className='icons'>
                  <ImPencil className='pen' onClick={() => handleClickUpdate(row._id)}/>
                  <BsTrash className='trash' onClick={() => handleClickDelate(row._id)}/>
                </div>              
              </TableCell>
            </TableRow>
            
            </>
          ))}
        </TableBody>:
        <TableBody>
           <TableRow>
             <TableCell>You don't have products</TableCell>
             <TableCell></TableCell>
             <TableCell></TableCell>
             <TableCell></TableCell>
             <TableCell></TableCell>
             <TableCell>
               <Link to="/add" style={{ textDecoration: "none" }}>
                <button className='btnAdd'>Create Product</button>
               </Link>
             </TableCell>
           </TableRow>
        </TableBody>
        }

      </Table>
    </TableContainer>:
    <div className='skeleton'>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
      <Skeleton variant="rectangular" height={210} />
    </div>    
    }
    <DelateDialog open={delate} handleClose={handleCloseDelate} id={id}/>
    <UpdateDialog open={open} handleClose={handleCloseUpdate} id={id}/>
    </div>
  );
}
