import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import ProductTopBar from '../Components/Product/ProductTopBar';
import ProductBottomBar from '../Components/Product/ProductBottomBar';
import styled from 'styled-components';
import UserGoods from '../Components/Product/UserGoods';
const baseUrl = process.env.PUBLIC_URL;

const ProductDetail = styled.div`
  padding: 20px;
  font-size: 20px;
  
  .user {
    display: flex;
    gap: 20px;
    line-height: 45px;
    font-size: 25px;
  }
  .user svg {
     font-size: 45px;
  }
`

let carouselItems = [
  `${baseUrl}/no_img.jpg`,
  `${baseUrl}/no_img.jpg`,
  `${baseUrl}/no_img.jpg`,
]

function Product() {
    return(
        <>
          <ProductTopBar/>
            <Carousel>
              {carouselItems.map( item => 
                <CarouselItem>
                  <img src={item}/>
                </CarouselItem>  
              )}
            </Carousel>
            <ProductDetail>
              <div className="user">
                <FontAwesomeIcon icon={faUserCircle} />
                <span>닉네임</span>
              </div>
              <hr/>
              <div>
                <b>제목</b>
                <p>
                  <span>카테고리</span>&nbsp;
                  <span>게시시간</span>
                </p>
                <b>본문</b>
                <p>
                  -<br/>
                  -<br/>
                  -<br/>
                </p>
                <button>관심</button>
              </div>
              <hr/>
            </ProductDetail>
            <UserGoods/>
            <ProductBottomBar/>
        </>
    )
}

export default Product;