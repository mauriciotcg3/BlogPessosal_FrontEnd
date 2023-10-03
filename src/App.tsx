import React from "react";
import Home from "./paginas/Home";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/Login/Login';

function App(){
  
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;