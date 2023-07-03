import React,{useEffect} from 'react'
import {useLocation } from 'react-router-dom';
import Footer from '../../component/footer/footer'
import Sidebar from '../../component/sidebar/sidebar'
import User from '../../component/user/user'
import { useContext } from "react";
import {MenuContext} from '../../context/menuContext'
import ScrollToTop from '../../component/scroll/scroll';
import Topbar from '../../component/topBar/topbar';

export default function Users() {
	 const { menu } = useContext(MenuContext);
   const location = useLocation();


  // scroll page to top 
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);

  return (
    <div className='home'>
      <Sidebar />
       <div className={!menu ? 'content close' : "content open"}>
       <Topbar />       
       <User />
       <Footer />
       <ScrollToTop />
      </div>
    </div>
  )
}
