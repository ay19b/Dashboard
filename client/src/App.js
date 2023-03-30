import React, { useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/home/home';
import Users from './page/user/user';
import Orders from './page/order/order';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Loading from "./component/loading/loading";
import Products from './page/products/products';
import Add from './page/add/add';



function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [isLoading, setIsLoading] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
    }, 2500)
  },[]);

  return (
  <>
     {!isLoading ?(
	   <Loading />
	 ):(
    <div className={darkMode ? "app" : "app dark"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="users">
              <Route index element={<Users />} />
            </Route>
            <Route path="order">
              <Route index element={<Orders />} />
            </Route>
            <Route path="products">
              <Route index element={<Products />} />
            </Route>
            <Route path="add">
              <Route index element={<Add />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
	 ) 
	 }
	 </>
  );
}

export default App;
