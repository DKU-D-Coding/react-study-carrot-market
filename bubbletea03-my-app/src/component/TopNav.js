import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

export default function TopNav({left, center, right}) {
    const navigate = useNavigate();
    return (
        <Container>
            <div>
                {left}
            </div>
            <div>
                {center}
            </div>
            <div>
                {right}
            </div>
        </Container>
    );
}

const Container = styled.div`
    position: fixed; /* 위에 고정 */
    top: 0;
    width: 100%;
    height: 80px;
    background-color: white;

    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid gray;

    div {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 50px;
        height: 50px;

        * {
            width: 100%;
            height: 100%;
            line-height: 50px;
            margin: 0;
        }

        > * {
            padding: 0 10px;
        }
    }
`