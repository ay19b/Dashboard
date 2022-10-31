import React, { useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/home/home';
import Users from './page/user/user';
import Orders from './page/order/order';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Loading from "./component/loading/loading";
import { theme } from './theme';
import { ThemeProvider } from '@mui/material/styles';

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
    <ThemeProvider theme={theme}>
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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </ThemeProvider>
	 ) 
	 }
	 </>
  );
}

export default App;
