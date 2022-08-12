import React from 'react';

import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import { Home } from "./Home";
import { Produtos } from "./Produtos";
import { Ordem } from "./Ordem";
import { NavBar } from '../../components/NavBar';



export const Principal: React.FC = () => {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/ordem' element={<Ordem />} />
      </Routes>
    </BrowserRouter>


  );
}