import React,{useEffect} from 'react'
import {useLocation } from 'react-router-dom';
import Footer from '../../component/footer/footer'
import Sidebar from '../../component/sidebar/sidebar'
import Topbar from '../../component/topBar/topbar'
import Order from '../../component/order/order'
import { useContext } from "react";
import {MenuContext} from '../../context/menuContext'
import ScrollToTop from '../../component/scroll/scroll';


export default function Orders() {
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
       <Order />
       <Footer />
       <ScrollToTop />
      </div>
      
      
    </div>
  )
}
