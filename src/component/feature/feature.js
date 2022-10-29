import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import admin from '../../images/admin.webp'
import Typography from '@mui/material/Typography';
import {TbChartBubble} from 'react-icons/tb'
import {FaChartLine,FaChartBar,FaChartPie} from 'react-icons/fa'
import './feature.css'

function Feature() {
  return (
    <div className='list'>
      <div className='card'>
        <FaChartLine />
        
        <div className='cardInf'>
            <h5>Total Sales</h5>
            <h6>$3234</h6>
        </div>
      </div>
      <div className='card'>
        <FaChartBar />
        
        <div className='cardInf'>
            <h5>Today Sale</h5>
            <h6>$254</h6>
        </div>
      </div>
      <div className='card'>
        <TbChartBubble />
        
        <div className='cardInf'>
            <h5>Total Products</h5>
            <h6>234</h6>
        </div>
      </div>

      <div className='card'>
        <FaChartPie />
        
        <div className='cardInf'>
            <h5>Total Orders</h5>
            <h6>60</h6>
        </div>
      </div>
    </div>
    
  )
}

export default Feature