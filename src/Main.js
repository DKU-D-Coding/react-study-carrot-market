import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './ProductPage';
import PostPage from './PostPage';
import HomePage from './HomePage';
function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:itemSlug' element={<ProductPage />} />
        <Route path='/post' element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
