import { Link, useParams } from 'react-router-dom'
import { useState } from 'react';
import './Product.css'
import BackButton from './component/Back_Button'

const products = [ 
    {},
    { pid: 1, pname: "노트북", price: "1,330,000", heart: 0, seller: "이예일" },
    { pid: 2, pname: "스마트폰", price: "770,000", heart: 2, seller: "이예이" },
    { pid: 3, pname: "오디오 스피커", price: "120,000", heart: 3, seller: "이예삼" },
    { pid: 4, pname: "플레이스테이션", price: "330,000", heart: 6, seller: "이예사" },
    { pid: 5, pname: "보조배터리", price: "55,000", heart: 11, seller: "이예오" },
    { pid: 6, pname: "컴퓨터 모니터", price: "190,000", heart: 8, seller: "이예육" },
    { pid: 7, pname: "헤드폰", price: "170,000", heart: 0, seller: "이예칠" },    
    { pid: 8, pname: "닌텐도 스위치", price: "360,000", heart: 6, seller: "이예팔" },
];

function Product() {
    window.scrollTo(0, 0);
    return (
        <div className="product">
          <ProductHeader/>
          <ProductContent/>
          <ProductFooter/>
        </div>
    );
  }
  export default Product;
  
  function ProductHeader() {
    return (
      <div className="product_header">
        <div className="home_button">
          <Link to="/" >
            <img alt="홈 버튼" src="/ui/home_button.png"/>
          </Link>
        </div>
        <BackButton />
      </div>
    );
  }
  
  function ProductContent() {
    let {product_id} = useParams();
    return (
      <>
        <div className="product_image">
          <img alt = {products[product_id].pname} src = {"../product/"+ product_id+".jpg"} width="450px" />
        </div>
  
        <div className="product_content">
            <div className="user_profile">
                <img alt="판매자 아이콘" src="/ui/seller_icon.png" />
                <div> {products[product_id].seller} </div>
            </div>
            <div className="post">
                <h1>{products[product_id].pname+" 판매합니다"}</h1>
                <div>{"중고 "+products[product_id].pname+" 판매합니다 연락주세요."}</div>
                <br/>
                <br/>
            </div>
        </div>
  
        <div className="other_products" >
          <div className="이름지을꺼없다">{products[product_id].seller}님의 다른 판매 상품</div>
          <div className="see_all">모두보기</div>
        </div>
      </>
    );
  }
  
  function ProductFooter() {
    const [url, setUrl] = useState("/ui/heart_button.png");
    return (
      <div className="product_footer">
        <div className="heart_button">
        <img alt="하트 버튼" src={url} onClick={()=>{setUrl("/ui/red_heart.png")}} />
        </div>
        <div className="product_price">
           <h2>가격</h2>
        </div>
      </div>
    );
  }