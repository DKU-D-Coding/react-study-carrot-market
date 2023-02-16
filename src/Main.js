import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import PostPage from './pages/PostPage';
// import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import { RecoilRoot } from 'recoil';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import { lazy } from 'react';
import BeforeLogInPage from './pages/BeforeLogInPage';
function Main() {
  const HomePage = lazy(() => import('./pages/HomePage'));
  const renderLoader = () => <p>Loading</p>;
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Suspense fallback={renderLoader()}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/:itemSlug' element={<ProductPage />} />
            <Route path='/post' element={<PostPage />} />
            <Route path='/category' element={<CategoryPage />} />
            <Route path='/boforelogin/signin' element={<SignInPage />} />
            <Route path='/boforelogin/signup' element={<SignUpPage />} />
            <Route path='/boforelogin' element={<BeforeLogInPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default Main;
