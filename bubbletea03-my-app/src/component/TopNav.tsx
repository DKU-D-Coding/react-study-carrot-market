import styled from "styled-components";

interface IProps {
    left?: JSX.Element;
    center?: JSX.Element;
    right?: JSX.Element;
}

export default function TopNav({left, center, right}: IProps) {
    return (<>
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
        <SpaceBox/>
    </>);
}

const Container = styled.div`
    position: fixed; /* 위에 고정 */
    top: 0;
    width: 100%;
    height: 80px;
    background-color: white;

    text-align: center;

    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid gray;

    div {
        display: flex;
        min-width: 50px;

        button, a, img {
            width: 50px;
            height: 50px;
        }

        * {
            line-height: 50px;
            margin: 0;
        }

        > * {
            padding: 0 10px;
        }
    }
`

const SpaceBox = styled.div`
    width: 100%;
    height: 80px;
`