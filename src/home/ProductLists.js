import styled from "styled-components";
import { Link } from 'react-router-dom';
import HeartButton from './HeartButton';
  
function ProductLists({p}) {
    return (
        <Link to={"/product/"+p.pid} style={{color:"black", textDecoration:"none"}}>
            <ProductListStyle>
                <ProductImage src = {"product/"+ p.pid+".jpg"} alt = {p.pname}/>
                <div>
                  <h3>{p.pname}</h3>
                  <h3>{"₩ "+p.price.toLocaleString()} </h3>
                </div>
                { 
                    p.heart !== 0 ? <HeartButton heart={p.heart}/> : null
                }
            </ProductListStyle>
        </Link>
    );
}

export default ProductLists;

const ProductListStyle = styled.div
`
    display: flex;
    margin: 20px;
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
    position: relative;
    div{ margin-left: 20px; }
    h3{ margin: 0; padding-top: 15px; text-align: left;}
`
const ProductImage = styled.img `width: 100px; height: 100px;`


