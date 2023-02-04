import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    return (
        <Container>
            <button onClick={() => {navigate(-1)}}>
                <img alt="왼쪽 화살표" src="/icon/arrow.png"/>
            </button>
            <h2>중고거래 글쓰기</h2>
            <button>
                <h2>완료</h2>
            </button>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid gray;

    button:first-child {
        width: 50px;
        height: 50px;
        padding-left: 10px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    button:last-child {
        color: orange;
        padding-right: 10px;
    }
`