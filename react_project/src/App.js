import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductUpload from './pages/ProductUpload';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:goodsId" element={<Product/>} />
        <Route path="/upload" element={<ProductUpload/>} />
      </Routes>       
    </Router>
  );
}

export default App;
