import styled from "styled-components";

export default function BottomNav() {
    return (
        <StyledBlock>
            <img alt="빈 하트" src="/product-page/heart.png"/>
            <div className="mycarrot-button">
                <h3>가격</h3>
            </div>
        </StyledBlock>
    );
}

const StyledBlock = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;

    border-top: 2px solid gray;

    background-color: white;

    img {
        width: 50px;
        height: 50px;

        padding-right: 20px;
        margin: 0 15px;

        border-right: 2px solid gray;
    }
`