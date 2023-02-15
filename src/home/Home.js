import styled from "styled-components";
import HomeHeader from './HomeHeader'
import ProductLists from './ProductLists'
import HomeFooter from './HomeFooter'
import PlusButton from './PlusButton'
import { useRecoilValue } from "recoil";
import { categoryFilter, productData } from "../Recoil";

function Home() {
  
  const products = useRecoilValue(productData);
  const category = useRecoilValue(categoryFilter);

  return (
    <HomeStyle>
      <HomeHeader/>
      {products.filter((p)=>p.category === category || category=="전체").map(p => <ProductLists key={p.pid} p = {p} />)}
      <HomeFooter/>
      <PlusButton/>
    </HomeStyle>
  );
}

export default Home;


const HomeStyle = styled.div
`
padding-top: 70px;
padding-bottom: 110px;
`


  