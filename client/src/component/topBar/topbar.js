import { useState, useEffect } from 'react';
import "./topbar.css";
import {BsFillEnvelopeFill,BsFillBellFill,BsFillSunFill} from 'react-icons/bs'
import {SiPhpmyadmin} from 'react-icons/si'
import {HiOutlineMenu} from 'react-icons/hi'
import {FaHome,FaShoppingBag,FaUser,FaUserEdit} from 'react-icons/fa'
import {BiChevronDown,BiChevronUp,BiHelpCircle} from 'react-icons/bi'
import {MdDarkMode} from 'react-icons/md'
import {AiOutlineUser,AiOutlineSetting} from "react-icons/ai"
import {TbUsers} from "react-icons/tb"
import Avatar from '@mui/material/Avatar';
import admin from '../../images/admin.webp'
import { DarkModeContext } from "../../context/darkModeContext";
import {MenuContext} from '../../context/menuContext'
import { useContext } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Link } from "react-router-dom";


export default function Topbar() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { dispatch } = useContext(MenuContext);
  const [drop, setDrop] = useState(false);


  
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
           <input placeholder="Search" className='input'/>
        </div>
        <div className="rightBar">
            <div className="topbarListItem">
			        <div className='circleSvg'><BsFillEnvelopeFill /></div>
            </div>
            <div className="topbarListItem">
			        <div className='circleSvg'><BsFillBellFill /></div>
            </div>
            <div className="topbarListItem" onClick={()=> setDrop(!drop)}>
               <Avatar alt="Remy Sharp" src={admin} style={{marginRight: '8%'}} />
               <h1>Jhon Doe</h1>
               {!drop?<BiChevronDown className="iconDown"/> :<BiChevronUp className="iconDown"/>}
               {drop? 
                    <div className='listUser'>
                      <li><AiOutlineUser />My profile</li>
                      <li><AiOutlineSetting />Settings</li>
                      <li><TbUsers />Activity</li>
                      <li><BiHelpCircle/>Helps</li>
                      <div>Sign Out</div>
                    </div>:null}
            </div>
			      {darkMode?
                <DarkModeOutlinedIcon onClick={toggleDarkMode} style={{cursor:"pointer"}}/>
                :<BsFillSunFill onClick={toggleDarkMode} style={{color: 'orange',fontSize: '1.3rem',cursor:"pointer"}}/>
		          }
        </div>
        </div>  
    </div>
  );
}