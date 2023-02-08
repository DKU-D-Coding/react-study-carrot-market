import ItemCard from "../component/ItemCard.js";
import itemData from "../data/ItemData.js";
import styled from "styled-components";
import BottomNav from './../component/home/BottomNav';
import { Link } from 'react-router-dom';
import TopNav from "../component/TopNav.js";

export default function Home() {
    window.scrollTo(0, 0);

    // TODO : RecoilValue갖고오기
    
    return (<>
        <TopNav left={<h2>홈</h2>}
            right={
            <Link to="/select-category">
                <img alt="메뉴 버튼" src="/icon/hamburger.png"/>
            </Link>
        }/>
        {
            itemData.map((item, idx) => <ItemCard item={item} mode="home" key={idx}/>)
        }
        <BottomNav/>
        <Link to="/writing">
            <PlusButton>
                <img alt="플러스 버튼" src="/icon/plus.png"/>
            </PlusButton>
        </Link>
    </>);
}


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