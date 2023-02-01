import { BrowserRouter, Routes, Route, Link, useParams, useNavigate} from 'react-router-dom'
import React, {useEffect, useState} from 'react';
import './App.css'

let products = [];
(()=>{
  fetch("http://localhost:3001/callbody",{
    method:"post",
    headers : {
      "content-type" : "application/json",
    },
    body : JSON.stringify(),
  })
  .then((res)=>res.json())
  .then((json)=>{
    products = json;
  });
})();

let seller = [];
  (() => {
    fetch("/hello")
        .then((response) => {
            return response.json();
        })
        .then(function (data) {
            seller = data;
        });
  })();

let product = [ 
  { pid: 1, pname: "노트북", price: "1,330,000"},
  { pid: 2, pname: "스마트폰", price: "770,000"},
  { pid: 3, pname: "오디오 스피커", price: "120,000" },
  { pid: 4, pname: "플레이스테이션", price: "330,000"},
  { pid: 5, pname: "보조배터리", price: "55,000" },
  { pid: 6, pname: "컴퓨터 모니터", price: "190,000"},
  { pid: 7, pname: "헤드폰", price: "170,000" },    
  { pid: 8, pname: "닌텐도 스위치", price: "360,000"},
];





function App() {
	return (
    <div className="App">
      <BrowserRouter>
			  <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/product/:product_id"} element={<Product />} />
				  <Route path="*" element={<h1> 존재하지 않는 URL입니다. </h1>} />
			  </Routes>
	  	</BrowserRouter>
    </div>
  );
}

export default App;




function Home() {
  return (
    <div className="home">
      <Home_Header/>
      {products.map(p => <Product_Lists id={p.pid} name={p.pname} price={p.price} />)}
      <Home_Footer/>
    </div>
  );
}



function Product() {
  window.scrollTo(0, 0);
  return (
      <div className="product">
        <Product_Header/>
        <Product_Content/>
        <Product_Footer/>
      </div>
  );
}

function Home_Header() {
  return (
      <div className="home_header">
        <div onClick={() => {window.scrollTo(0, 0)}}>
          <h1>홈</h1>
        </div>
        <img src="/ui/menu_button.png"/>
      </div>
  );
}

function Product_Lists({id, name, price}) {
  return (
      <Link to={"/product/"+id} style={{color:"black", textDecoration:"none"}}>
          <div className="product_lists">
              <img src = {"product/"+ id+".jpg"} />
              <div>
                <h3>{name}</h3>
                <h3>{"₩ "+price}</h3>
              </div>
          </div>
      </Link>
  );
}

function Home_Footer() {
  return (
    <>
      <div className="home_footer">
        <div className="home_button">
          <img src="/ui/home_button.png"/>
          <h2>홈</h2>
        </div>
        <div className="my_button">
          <img src="/ui/my_button.png"/>
          <h2>나의 당근</h2>
        </div>
      </div>
        <div className="plus_button">
        <img src="/ui/plus_button.png"/>
      </div>
    </>
  );
}


function Product_Header() {
  const navigate = useNavigate();
  return (
    <div className="product_header">
      <div className="home_button">
        <Link to="/" >
          <img src="/ui/home_button.png"/>
        </Link>
      </div>
      <div className="back_button">
        <img src="/ui/back_button.png" onClick={() => {navigate(-1)}}/>
      </div>
    </div>
  );
}

function Product_Content() {
  let {product_id} = useParams();
  var seller = new Array( '강동원','송중기','강동원','송중기','강동원','송중기','강동원','송중기');
  var title = new Array( '닌텐도 스위치','노트북','스마트폰','스피커','플스','보조 배터리','모니터','헤드폰');
  return (
    <>
      <div className="product_image">
        <img src = {"../product/"+ product_id+".jpg"} width="450px" />
      </div>

      <div className="product_content">
          <div className="user_profile">
              <img src="/ui/seller_icon.png" style={{width:"70px", height:"70px", marginRight:"10px"}}/>
              <div> {seller[product_id]} </div>
          </div>
          <div className="post">
              <h1>{title[product_id]+" 판매합니다"}</h1>
              <div>{"중고 "+title[product_id]+" 판매합니다 연락주세요."}</div>
              <br/>
              <br/>
          </div>
      </div>

      <div className="other_products" >
        <div className="이름지을꺼없다">{seller[product_id]}님의 다른 판매 상품</div>
        <div className="see_all">모두보기</div>
      </div>
    </>
  );
}

function Product_Footer() {
  return (
    <div className="product_footer">
      <img src="/ui/heart_button.png"/>
      <div className="product_price">
         <h2>가격</h2>
      </div>
    </div>
  );
}
