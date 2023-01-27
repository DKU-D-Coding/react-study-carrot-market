import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;

    border-bottom: 2px solid gray;
    background-color: white;
`

const StyledImg = styled.img`
    width: 50px;
    height: 50px;
    padding: 15px;
`

function Header() {

    const navigate = useNavigate();

    return (
        <StyledHeader>
            <StyledImg src="/product-page/arrow.png" onClick={() => {navigate(-1)}} style={{cursor:"pointer"}}/>
            <Link to="/">
                <StyledImg src="/home/home.png"/>
            </Link>
        </StyledHeader>
    );
}

export default Header;