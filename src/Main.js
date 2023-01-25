import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductItemDetail from './ProductItemDetail';
import HomePage from './HomePage';
function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:itemSlug' element={<ProductItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
