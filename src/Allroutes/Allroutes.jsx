import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Movies from '../Pages/Movies'

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movie/:name" element={<Movies />}></Route>
    </Routes>
  );
}

export default Allroutes