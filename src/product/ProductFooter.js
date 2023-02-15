import { useState } from 'react';
import styled from 'styled-components';

function ProductFooter({price}) {
  const [heartState, setHeartState] = useState(false);
  const [url, setUrl] = useState("/ui/heart_button.png");
  function heartchange(){
        if(heartState){setHeartState(false); setUrl("/ui/heart_button.png");}
        else {setHeartState(true); setUrl("/ui/red_heart.png");}
  };
    return (
      <ProductFooterStyle>
        <div className="heart_button">
        <img alt="하트 버튼" src={url} onClick={heartchange} />
        </div>
        <div className="product_price">
           <h2>가격 {price.toLocaleString()}</h2>
        </div>
      </ProductFooterStyle>
    );
  }

export default ProductFooter;

const ProductFooterStyle = styled.div
`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  border-top: 2px solid gray;
  background-color: white;
  img{
    width: 50px;
    height: 50px;
    padding-right: 20px;
    margin: 0 15px;
    border-right: 2px solid gray;
    cursor: pointer;
  }
  h2{padding-bottom:9px;}
`