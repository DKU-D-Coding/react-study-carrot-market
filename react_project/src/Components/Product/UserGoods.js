import { useParams } from "react-router-dom";
import styled from "styled-components";
import UserCard from "./UserCard";

const baseUrl = process.env.PUBLIC_URL;

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 20px;

    .grid {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        gap: 10px;
    }

    .title {
        display: flex;
        justify-content: space-between;
        font-size: 25px;
        margin-bottom: 20px;
    }
`

let userCards = [
    {
        title: "제목 6",
        price: "가격 6",
        goodsId: "97",
        imgSrc: `${baseUrl}/no_img.jpg`,
    },
    {
        title: "제목 7",
        price: "가격 7",
        goodsId: "98",
        imgSrc: `${baseUrl}/no_img.jpg`,
    },
    {
        title: "제목 8",
        price: "가격 8",
        goodsId: "99",
        imgSrc: `${baseUrl}/no_img.jpg`,
    },
    {
        title: "제목 9",
        price: "가격 9",
        goodsId: "100",
        imgSrc: `${baseUrl}/no_img.jpg`,
    }
]

function UserGoods(){
    const {goodsId} = useParams();

    return(
        <Container>
            <div className="title">
                <b>닉네임님의 판매상품</b>
                <span>모두보기</span>
            </div>
            <div className="grid">
                {userCards.map(card => 
                    <UserCard 
                        title={card.title}
                        price={card.price}
                        goodsId={card.goodsId}
                        imgSrc={card.imgSrc}
                    />
                )}
            </div>
        </Container>
    )
}

export default UserGoods;