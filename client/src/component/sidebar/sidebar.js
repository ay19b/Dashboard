import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./sidebar.css";
import {FaHome,FaShoppingBag,FaUser,FaUserEdit} from 'react-icons/fa'
import {BsCartPlusFill,BsShop} from 'react-icons/bs'
import {BiAddToQueue} from "react-icons/bi"
import {TfiMenuAlt} from 'react-icons/tfi'
import {RiLuggageCartFill} from 'react-icons/ri'
import {SiPhpmyadmin} from 'react-icons/si'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import admin from '../../images/admin.webp'
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import {MenuContext} from '../../context/menuContext'
import useMediaQuery from '@mui/material/useMediaQuery'


export default function Sidebar() {
  const { menu } = useContext(MenuContext);
  const { dispatch } = useContext(MenuContext);
  const matches = useMediaQuery('(max-width:1000px)');
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  

    return (
      <div className={matches?menu ? "sidebar open" : "sidebar close":!menu ? "sidebar open" : "sidebar close"}>
      <div className="sidebarWrapper">
       
		 <Link to="/" style={{ textDecoration: "none" }}> 
		  <div className="logo">
            <FaUserEdit /><h4>admin</h4>
		  </div>
		 </Link> 
        

        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={admin} />
        </ListItemAvatar>
        <ListItemText
          primary="Jhon Doe"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline',color:'var(--text)' }}
                component="span"
                variant="body2"
              >
                Admin
              </Typography>
            </>
          }
        />
      </ListItem>
        <div className="sidebarMenu">
          
          <ul className="sidebarList">
          <Link to="/" style={{ textDecoration: "none" }}> 
            <li className={splitLocation[1] === "" ? "sidebarListItem active" : "sidebarListItem"} onClick={matches?() => dispatch({ type: "TOGGLE" }):null}>
              <FaHome /> Dashboard
            </li>
          </Link> 
          <Link to="/order" style={{ textDecoration: "none" }} >
             <li className={splitLocation[1] === "order" ? "sidebarListItem active" : "sidebarListItem"} onClick={matches?() => dispatch({ type: "TOGGLE" }):null}>
                <RiLuggageCartFill/>Orders
              </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
              <li className={splitLocation[1] === "users" ? "sidebarListItem active" : "sidebarListItem"} onClick={matches?() => dispatch({ type: "TOGGLE" }):null}>
                <FaUser/>Users
              </li>
          </Link>
           <Link to="/add" style={{ textDecoration: "none" }}>
            <li className={splitLocation[1] === "add" ? "sidebarListItem active" : "sidebarListItem"} onClick={matches?() => dispatch({ type: "TOGGLE" }):null}>
               <BiAddToQueue />Edit product
            </li>
            </Link> 
           <Link to="/products" style={{ textDecoration: "none" }}>
            <li className={splitLocation[1] === "products" ? "sidebarListItem active" : "sidebarListItem"} onClick={matches?() => dispatch({ type: "TOGGLE" }):null}>
              <FaShoppingBag/> Products
            </li>
            </Link>                       
            <li className="sidebarListItem">
              <BsShop/>Salles
            </li>
			      <li className="sidebarListItem">
              <BsCartPlusFill/>Pages
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
  }
  