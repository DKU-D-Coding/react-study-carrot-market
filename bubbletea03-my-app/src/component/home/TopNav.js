import styled from "styled-components";

export default function TopNav() {
    return (
        <StyledBlock>
            <h2>홈</h2>
            <button>
                <img alt="메뉴 버튼" src="/home/hamburger.png"/>
            </button>
        </StyledBlock>
    );
}

const StyledBlock = styled.div`
    position: fixed; /* 위에 고정 */
    top: 0;
    width: 100%;
    height: 80px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 2px solid gray;
    background-color: white;

    > * {
        padding: 20px;
    }

    button {
        width: 50px;
        height: 50px;

        img {
            width: 100%;
            height: 100%;
        }
    }
`