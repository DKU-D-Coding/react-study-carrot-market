import { useState } from 'react';
import { Link } from 'react-router-dom'
import './Home.css'

const products = [ 
    { pid: 1, pname: "노트북", price: "1,330,000", heart: 0, seller: "이예일" },
    { pid: 2, pname: "스마트폰", price: "770,000", heart: 2, seller: "이예이" },
    { pid: 3, pname: "오디오 스피커", price: "120,000", heart: 3, seller: "이예삼" },
    { pid: 4, pname: "플레이스테이션", price: "330,000", heart: 6, seller: "이예사" },
    { pid: 5, pname: "보조배터리", price: "55,000", heart: 11, seller: "이예오" },
    { pid: 6, pname: "컴퓨터 모니터", price: "190,000", heart: 8, seller: "이예육" },
    { pid: 7, pname: "헤드폰", price: "170,000", heart: 0, seller: "이예칠" },    
    { pid: 8, pname: "닌텐도 스위치", price: "360,000", heart: 6, seller: "이예팔" },
];


  
function Home() {
    let [product_arr, pd_change] = useState(products)
    return (
      <div className="home">
        <HomeHeader/>
        {product_arr.map(p => <ProductLists p = {p} />)}
        <HomeFooter/>
      </div>
    );
}

export default Home;

  
function HomeHeader() {
    return (
        <div className="home_header">
          <div onClick={() => {window.scrollTo(0, 0)}}>
            <h1>홈</h1>
          </div>
          <div className="menu_button">
            <img alt="메뉴버튼" src="/ui/menu_button.png"/>
          </div>
        </div>
    );
  }
  
  function ProductLists({p}) {
    return (
        <Link to={"/product/"+p.pid} style={{color:"black", textDecoration:"none"}}>
            <div className="product_lists">
                <img src = {"product/"+ p.pid+".jpg"} alt = {p.pname}/>
                <div>
                  <h3>{p.pname}</h3>
                  <h3>{"₩ "+p.price} </h3>
                </div>
                { 
                    p.heart !== 0 ? <HeartBeat heart={p.heart}/> : null
                }
            </div>
        </Link>
    );
  }

  function HeartBeat({heart}){
    const [url, setUrl] = useState("/ui/heart_button.png");
    return(
        <div className='heart' onClick={()=>{setUrl("/ui/red_heart.png")}}>
        <img alt="하트 버튼" src={url}  /> <h2>{heart}</h2>
        </div>
    );
  }
  
  function HomeFooter() {
    return (
      <>
        <div className="home_footer">
          <div className="home_button">
            <img alt="홈 버튼" src="/ui/home_button.png"/>
            <h2>홈</h2>
          </div>
          <div className="my_button">
            <img alt="마이 버튼"  src="/ui/my_button.png"/>
            <h2>나의 당근</h2>
          </div>
        </div>
        <Link to="/upload" className="plus_button">
          <img alt="업로드 버튼" src="/ui/plus_button.png"/>
        </Link>
      </>
    );
  }
  
  