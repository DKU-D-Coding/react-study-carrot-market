import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import ProductPage from './page/ProductPage';
import WritingPage from './page/WritingPage';
import CategorySelect from './page/CategorySelect';
import RegisterPage from './page/RegisterPage';
import { createGlobalStyle } from 'styled-components';
import LoginPage from './page/LoginPage';

export default function App() {
  return (
	<BrowserRouter>
		<Routes>
			<Route path="*" element={<div> Not Found </div>} />
			<Route path="/" element={<Home/>} />
			<Route path="/product-page/:itemId" element={<ProductPage/>} />
			<Route path="/writing" element={<WritingPage/>} />
			<Route path="/select-category" element={<CategorySelect/>} />
			<Route path="/register" element={<RegisterPage/>} />
			<Route path="/login" element={<LoginPage/>} />
		</Routes>
		<GlobalStyle/>
	</BrowserRouter>
  );
}

const GlobalStyle = createGlobalStyle`
	body {
    	margin: 0;
	}

	button {
		all: unset;
		cursor: pointer;
	}

	input, textarea {
		border: 0;
		box-sizing: border-box;
	}

	a {
		color: black;
		text-decoration: none;
	}
`