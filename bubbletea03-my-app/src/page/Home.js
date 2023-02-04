import ItemCard from "../component/ItemCard.js";
import itemData from "../data/ItemData.js";
import styled from "styled-components";
import TopNav from './../component/home/TopNav';
import BottomNav from './../component/home/BottomNav';
import { Link } from 'react-router-dom';

export default function Home() {
    window.scrollTo(0, 0);
    
    return (
        <Container>
            <TopNav/>
            {
                itemData.map((item, idx) => <ItemCard item={item} mode="home" key={idx}/>)
            }
            <BottomNav/>
            <Link to="/writing">
                <PlusButton>
                    <img alt="플러스 버튼" src="/icon/plus.png"/>
                </PlusButton>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    text-align: center;
    padding-top: 80px;
    padding-bottom: 110px;
`

const PlusButton = styled.button`
    position: fixed;
    width: 90px;
    height: 90px;
    right: 10px;
    bottom: 120px;

    img {
        width: 100%;
        height: 100%;
    }
`