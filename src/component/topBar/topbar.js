import React from "react";
import "./topbar.css";
import {BsFillEnvelopeFill,BsFillBellFill,BsFillSunFill} from 'react-icons/bs'
import {SiPhpmyadmin} from 'react-icons/si'
import {HiOutlineMenu} from 'react-icons/hi'
import {FaHome,FaShoppingBag,FaUser,FaUserEdit} from 'react-icons/fa'
import {BiChevronDown} from 'react-icons/bi'
import {MdDarkMode} from 'react-icons/md'
import Avatar from '@mui/material/Avatar';
import admin from '../../images/admin.webp'
import { DarkModeContext } from "../../context/darkModeContext";
import {MenuContext} from '../../context/menuContext'
import { useContext } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Link } from "react-router-dom";


export default function Topbar() {
  const { disp } = useContext(DarkModeContext);
  const { dispatch } = useContext(MenuContext);
  const { menu } = useContext(MenuContext);
  const { darkMode } = useContext(DarkModeContext);
  
  return (
    <div  className="topbar">
      <div className="container">
        <div className="leftBar">
		   <Link to="/" style={{ textDecoration: "none" }}> 
		       <div className="logo">
               <FaUserEdit />
		       </div>
		    </Link> 
           <HiOutlineMenu className="iconMenu" onClick={() => dispatch({ type: "TOGGLE" })}/>
           <input placeholder="Search"/>
        </div>
		
		
        
        <div className="rightBar">
		    
            <div className="topbarListItem">
			  <div className='circleSvg'><BsFillEnvelopeFill /></div>
              <h1>Message</h1>
               <BiChevronDown className="iconDown"/>
            </div>
            <div className="topbarListItem">
			   <div className='circleSvg'><BsFillBellFill /></div>
               <h1>Notification </h1>
               <BiChevronDown className="iconDown"/>
            </div>
            <div className="topbarListItem">
               <Avatar alt="Remy Sharp" src={admin} style={{marginRight: '8%'}} />
               <h1>Jhon Doe</h1>
               <BiChevronDown className="iconDown"/>
            </div>
			{
			darkMode?<DarkModeOutlinedIcon
              onClick={() => disp({ type: "TOGGLE" })}
			  style={{cursor:"pointer"}}
            />:<BsFillSunFill
              onClick={() => disp({ type: "TOGGLE" })}
			  style={{color: 'orange',fontSize: '1.3rem',cursor:"pointer"}}
            />
		    }
        </div>
        </div>  
    </div>
  );
}