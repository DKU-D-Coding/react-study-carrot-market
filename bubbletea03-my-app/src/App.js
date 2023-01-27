import './GlobalStyle.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import ProductPage from './page/ProductPage';

// TODO: Header랑 Footer을 TopNav, BottomNav로 바꾸자

function App() {
  return (
    <div className="App">
       <BrowserRouter>
			<Routes>
				<Route path="*" element={<div> Not Found </div>} />
				<Route path="/" element={<Home/>} />
				<Route path="/product-page/:itemId" element={<ProductPage/>} />
			</Routes>
		</BrowserRouter>
    </div>
  );
}

export default App;
