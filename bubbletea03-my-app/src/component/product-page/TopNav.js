import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function TopNav() {

    const navigate = useNavigate();

    return (
        <StyledBlock>
            <button onClick={() => {navigate(-1)}}>
                <img alt="왼쪽 화살표" src="/product-page/arrow.png"/>
            </button>
            <Link to="/">
                <img alt="홈 아이콘" src="/home/home.png"/>
            </Link>
        </StyledBlock>
    );
}

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