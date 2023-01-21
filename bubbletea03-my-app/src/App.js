import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
				<Routes>
					<Route path="*" element={<div> Not Found </div>} />

					<Route path="/" element={
            <div>
              <Home/>
            </div>
          }/>
					<Route path="/product-page" element={<div> DD </div>} />
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
