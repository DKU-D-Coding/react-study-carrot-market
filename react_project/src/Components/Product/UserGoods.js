import { useParams } from "react-router-dom";
import styled from "styled-components";
import UserCard from "./UserCard";

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

function UserGoods(){
    const {goodsId} = useParams();

    return(
        <Container>
            <div className="title">
                <b>닉네임님의 판매상품</b>
                <span>모두보기</span>
            </div>
            <div className="grid">
                <UserCard img={process.env.PUBLIC_URL + '/no_img.jpg'} title="제목" price="가격" goodsId="226"/>
                <UserCard img={process.env.PUBLIC_URL + '/no_img.jpg'} title="제목" price="가격" goodsId="227"/>
                <UserCard img={process.env.PUBLIC_URL + '/no_img.jpg'} title="제목" price="가격" goodsId="228"/>
                <UserCard img={process.env.PUBLIC_URL + '/no_img.jpg'} title="제목" price="가격" goodsId="229"/>
            </div>
        </Container>
    )
}

export default UserGoods;