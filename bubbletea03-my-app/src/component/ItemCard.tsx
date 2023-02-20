import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export default function ItemCard({ item, mode }) {
    return (
        <Link to={`/product-page/${item.itemId}`}>
            <Container mode={mode}>
                <img alt="물건 사진" src={item.url} />
                <div>
                    <h3>{item.title}</h3>
                    <h5>{item.price}</h5>
                </div>
            </Container>
        </Link>
    );
}

const Container = styled.div<{mode: string}>`
    display: flex;
    h3, h5 { margin: 0; }

    ${function ({ mode }) {
        switch (mode) {
            case "home":
                return css`
                    margin: 20px;
                    border-bottom: 1px solid gray;
                    padding-bottom: 10px;

                    div { margin-left: 20px; }

                    img {
                        width: 100px;
                        height: 100px;
                    }
                `
            case "item-list":
                return css`
                    flex-direction: column;

                    img {
                        width: 100%;
                        height: 100px;
                    }
                `
        }
    }}
`