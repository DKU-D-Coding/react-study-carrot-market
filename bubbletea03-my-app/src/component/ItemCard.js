import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export default function ItemCard({ item, mode }) {
    return (
        <Link to={`/product-page/${item.id}`}> // TODO : Container랑 Link 상하관계 바꾸기 ㄱ
            <Container mode={mode}>
                <img alt="물건 사진" src="https://images.unsplash.com/photo-1673901159004-cf765b562280?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
                <div>
                    <h3>{item.title}</h3>
                    <h5>{item.price}</h5>
                </div>
            </Container>
        </Link>
    );
}

const Container = styled.div`
    display: flex;
    h3, h5 { margin: 0; }

    ${function({ mode }) {
        if (mode == "home") return css`
            margin: 20px;
            border-bottom: 1px solid gray;
            padding-bottom: 10px;

            div { margin-left: 20px; }

            img {
                width: 100px;
                height: 100px;
            }
        `
        else if (mode == "item-list") return css`
            flex-direction: column;

            img {
                width: 100%;
                height: 100px;
            }
        `
    }}
`