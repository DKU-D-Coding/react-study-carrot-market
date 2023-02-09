import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import ProductScreen from "./screens/ProductScreen";
import "./css/style.css";
import UploadScreen from "./screens/UploadScreen";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact></Route>

            <Route path="/product">
              <Route path=":id" element={<ProductScreen />} />
              <Route path="" element={<ProductScreen />} />
            </Route>
            <Route path="/users/upload" element={<UploadScreen />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
