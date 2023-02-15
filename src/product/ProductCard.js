import styled from "styled-components";
import { Link } from 'react-router-dom';
  
function ProductCard({p}) {
    window.scrollTo(0, 0);
    return (
        <Link to={"/product/"+p.pid} style={{color:"black", textDecoration:"none"}}>
            <ProductListStyle>
                <img src = {"../product/"+ p.pid+".jpg"} alt = {p.pname}/>
                  <h3>{p.pname}</h3>
                  <h3>{"₩ "+p.price.toLocaleString()} </h3>
            </ProductListStyle>
        </Link>
    );
}

export default ProductCard;

const ProductListStyle = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding-bottom: 10px;
    h3{ margin: 0; padding-top: 15px;}
    img{ width: 100px; height: 100px; }
`


