import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Product from './Product';
import Upload from './Upload';


function App() {
  
	return (
    <div className="App">
      <BrowserRouter>
			  <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/product/:product_id"} element={<Product />} />
          <Route path={"/upload"} element={<Upload />} />
				  <Route path="*" element={<h1> 존재하지 않는 URL입니다.</h1>} />
			  </Routes>
	  	</BrowserRouter>
    </div>
  );
}

export default App;



