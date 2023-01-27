import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledBlock = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;

    border-bottom: 2px solid gray;
    background-color: white;

    img {
        width: 50px;
        height: 50px;
        padding: 15px;
    }
`

function Header() {

    const navigate = useNavigate();

    return (
        <StyledBlock>
            <button onClick={() => {navigate(-1)}}>
                <img src="/product-page/arrow.png"/>
            </button>
            <Link to="/">
                <img src="/home/home.png"/>
            </Link>
        </StyledBlock>
    );
}

export default Header;