import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import CategoryApi from './pages/CategoryApi'

function Section() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/category/:cat_name" element={<CategoryApi/>} />
        <Route path="/productdetail/:pro_id" element={<ProductDetails/>} />


    </Routes>
      
    </>
  )
}

export default Section
