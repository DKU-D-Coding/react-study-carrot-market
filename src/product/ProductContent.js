import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { productData } from "../Recoil";
import ProductCards from './ProductCard'
import ProductFooter from './ProductFooter';

function ProductContent() {
  const products = useRecoilValue(productData);
  let {product_id} = useParams();
  let product = products[product_id];
  let seller = product.seller;
  let pname = product.pname;
  let price = product.price;
  let sameSeller = products.filter((p)=>p.seller == seller && p.pid != product_id);
    return (
      <>
      <ProductImage>
        <img src = {"../product/"+ product_id+".jpg"} alt = {pname} />
      </ProductImage>
      <UserProfile>
        <img alt="판매자 아이콘" src="/ui/seller_icon.png" />
        <h3> {seller} </h3>
      </UserProfile>
      <ProductPost>
        <h1>{pname+" 판매합니다"}</h1>
        <h4>{"중고 "+pname+" 판매합니다 연락주세요."}</h4>
      </ProductPost>
      { sameSeller.length !== 0 ? 
      <>
        <OtherProduct > {seller}님의 다른 판매 상품 <div>모두보기</div> </OtherProduct>
        <SameSellerProduct> 
          {sameSeller.map(p => <ProductCards key={p.pid} p = {p} />)} 
        </SameSellerProduct>
      </> : null
      }

      <ProductFooter price={price}/>
      </>
    );
}
  
export default ProductContent;

const ProductImage = styled.div
`
  display:flex;
  justify-content: center;
  img{
  padding: 15px;
  width: 450px;
  }
`

const UserProfile = styled.div
`
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid gray;
  img{ width: 70px; height: 70px; margin-Right: 10px; }
`
const ProductPost = styled.div
`
  padding-left: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
`

const OtherProduct = styled.div
`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  margin-left: 10px;
  margin-right: 20px;
  div{ cursor: pointer; color: gray;} 
`

const SameSellerProduct = styled.div
`
display:flex;
justify-content:flex-start;

`