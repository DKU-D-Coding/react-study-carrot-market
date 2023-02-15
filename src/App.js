import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue,} from 'recoil';
import Home from './home/Home';
import Category from './home/Category';
import Product from './product/Product';
import Upload from './upload/Upload';
import Welcome from './login/Welcome';
import Login from './login/Login';
import SignUp from './login/SignUp';


function App() {
	return (
    <RecoilRoot>
      <BrowserRouter>
			  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path={"/product/:product_id"} element={<Product />} />
          <Route path={"/upload"} element={<Upload />} />
          <Route path={"/select-category"} element={<Category />} />
				  <Route path="*" element={<h1> 존재하지 않는 URL입니다.</h1>} />
			  </Routes>
	  	</BrowserRouter>
    </RecoilRoot>
  );
}

export default App;



