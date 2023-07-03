import React,{useEffect} from 'react'
import {useLocation } from 'react-router-dom';
import ChartArea from '../../component/charts/areaChart'
import ChartBar from '../../component/charts/barChart'
import Feature from '../../component/feature/feature'
import Footer from '../../component/footer/footer'
import Sidebar from '../../component/sidebar/sidebar'
import DataTable from '../../component/table/table'
import Topbar from '../../component/topBar/topbar'
import './home.css'
import { useContext } from "react";
import {MenuContext} from '../../context/menuContext'
import ScrollToTop from '../../component/scroll/scroll';



export default function Home() {
  const { menu } = useContext(MenuContext);
  const location = useLocation();


  // scroll page to top 
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);

  return (
    <div className='home' >
      <Sidebar />
      <div className={!menu ? 'content close' : "content open"}>
       <Topbar />
       <Feature />
       <div className='charts'> 
         <ChartBar />
         <ChartArea/>
      </div>
      
         <DataTable />
      
      
         <Footer />
         <ScrollToTop />
      </div>
      
      
    </div>
  )
}
