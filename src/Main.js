import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import PostPage from './pages/PostPage';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import { RecoilRoot } from 'recoil';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

function Main() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:itemSlug' element={<ProductPage />} />
          <Route path='/post' element={<PostPage />} />
          <Route path='/category' element={<CategoryPage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default Main;
