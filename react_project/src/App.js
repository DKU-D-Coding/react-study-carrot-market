import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop';
import Home from './pages/Home';
import Product from './pages/Product';
import styles from './styles/App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:goodsId" element={<Product/>} />
        </Routes>       
      </div>
    </Router>
  );
}

export default App;
