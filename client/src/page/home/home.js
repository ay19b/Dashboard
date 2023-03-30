import React from 'react'
import ChartArea from '../../component/charts/areaChart'
import ChartBar from '../../component/charts/barChart'
import Feature from '../../component/feature/feature'
import Footer from '../../component/footer/footer'
import Sidebar from '../../component/sidebar/sidebar'
import DataTable from '../../component/table/table'
import Topbar from '../../component/topBar/topbar'
import './home.css'
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import {MenuContext} from '../../context/menuContext'
import ScrollToTop from '../../component/scroll/scroll';



export default function Home() {
  const { menu } = useContext(MenuContext);

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
