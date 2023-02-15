import styled from "styled-components";
import ProductHeader from './ProductHeader';
import ProductContent from './ProductContent';

function Product() {
    window.scrollTo(0, 0);
    return (
      <ProductSytle>
        <ProductHeader/>
        <ProductContent/>
      </ProductSytle>
    );
  }
  export default Product;
  
const ProductSytle = styled.div
`
  padding-top: 10px;
  padding-bottom: 100px;
`
  
