import React from 'react'
import ChartArea from '../../component/charts/areaChart'
import ChartBar from '../../component/charts/barChart'
import Feature from '../../component/feature/feature'
import Footer from '../../component/footer/footer'
import Sidebar from '../../component/sidebar/sidebar'
import DataTable from '../../component/table/table'
import Topbar from '../../component/topBar/topbar'
import User from '../../component/user/user'
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import {MenuContext} from '../../context/menuContext'
import ScrollToTop from '../../component/scroll/scroll';
import Product from '../../component/product/product'

export default function Products() {
	 const { menu } = useContext(MenuContext);
  return (
    <div className='home'>
      <Sidebar />
       <div className={!menu ? 'content close' : "content open"}>
         <Topbar /> 
         <Product />
         <Footer />
         <ScrollToTop />
      </div>
    </div>
  )
}
