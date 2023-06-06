import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Movies from '../Pages/Movies'
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ProductList from "../Pages/Sports.jsx";
import Technology from '../Pages/Technology';

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movie/:name" element={<Movies />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/technology/:title" element={<Technology />}></Route>
      <Route path="/sports" element={<ProductList />}></Route>
    </Routes>
  );
}

export default Allroutes