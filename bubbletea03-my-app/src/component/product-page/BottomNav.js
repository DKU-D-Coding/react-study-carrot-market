import styled from "styled-components";

export default function BottomNav() {
    return (<>
        <Container>
            <img alt="빈 하트" src="/icon/heart.png"/>
            <div>
                <h3>가격</h3>
            </div>
        </Container>
        <SpaceBox/>
    </>);
}

const Container = styled.div`
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

const SpaceBox = styled.div`
    height: 100px;
`