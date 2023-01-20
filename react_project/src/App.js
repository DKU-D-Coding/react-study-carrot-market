import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Exercise from './pages/Exercise';
import Main from './pages/Main';
import Shopping from './pages/Shopping';
import Study from './pages/Study';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/study" element={<Study/>} />
            <Route path="/shopping" element={<Shopping/>} />
            <Route path="/exercise" element={<Exercise/>} />
          </Routes>       
      </div>
    </Router>
  );
}

export default App;
