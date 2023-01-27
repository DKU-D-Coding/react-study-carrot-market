import styled from "styled-components";

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

function Header() {
    return (
        <StyledBlock>
            <h2>홈</h2>
            <button>
                <img src="/home/hamburger.png"/>
            </button>
        </StyledBlock>
    );
}

export default Header;