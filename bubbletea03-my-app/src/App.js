import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import ProductPage from './page/ProductPage';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
			<Routes>
				<Route path="*" element={<div> Not Found </div>} />

				<Route path="/" element={<Home/>} />

				<Route path="/product-page" element={<ProductPage/>} />
			</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
