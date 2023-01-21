import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
				<Routes>
					<Route path="*" element={<div> Not Found </div>} />

					<Route path="/" element={<Home/>} />
					<Route path="/product-page" element={<div> DD </div>} />
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
