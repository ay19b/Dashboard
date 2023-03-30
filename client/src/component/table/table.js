import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './table.css'
import useStyles from './style'
import Button from '@mui/material/Button';
import { DarkModeContext } from "../../context/darkModeContext";
import {MenuContext} from '../../context/menuContext'
import { useContext } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

 



const rows = [
  { id: '01 Jan 2045', Customer: 'Snow',Invoice: 'Jon',amount:'123$',status:"Paid",action:'detail'},
  { id: '02 Jan 2045', Customer: 'Snow',Invoice: 'Jon',amount:'123$',status:"Paid",action:'detail'},
  { id: '03 Jan 2045', Customer: 'Snow',Invoice: 'Jon',amount:'123$',status:"Paid",action:'detail'},
  { id: '04 Jan 2045', Customer: 'Snow',Invoice: 'Jon',amount:'123$',status:"Paid",action:'detail'},
  { id: '05 Jan 2045', Customer: 'Snow',Invoice: 'Jon',amount:'123$',status:"Paid",action:'detail'},
];

export default function DataTable() {
  const classes = useStyles();
	const { menu } = useContext(MenuContext);
	const matches = useMediaQuery('(max-width:600px)');
	
	
	
	
	const columns = [
  { field: 'id', headerName: 'Date', width: matches?!menu?160:160:!menu?160:200},
  { field: 'Invoice',headerName: 'Invoice',width: matches?!menu?160:160:!menu?160:200},
  { field: 'Customer',headerName: 'Customer',width: matches?!menu?160:160:!menu?160:200},
  { field: 'amount',headerName: 'Amount', width: matches?!menu?160:160:!menu?160:200},
  { field: 'status', headerName: 'Status', width: matches?!menu?160:160:!menu?160:200},
  {
      field: "action",
      headerName: "Action",
      width: 100 ,
      renderCell: (params) => {
        return (
          <div className="btnDetail">
           Detail
          </div>
        );
      },
    },
  
];

	
	
  return (
    <div className="table">
      <div className='headTable'>
        <h4 className='headText'>Recent Salse</h4>
        <h4 className='headBtn'>Show All</h4>
      </div>
      <DataGrid
        className={classes.root}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
