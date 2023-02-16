import ItemCard from "../component/ItemCard.js";
import styled from "styled-components";
import BottomNav from './../component/home/BottomNav';
import { Link, useNavigate } from 'react-router-dom';
import TopNav from "../component/TopNav.js";
import { homeCategoryState } from "../RecoilStates.js";
import { useRecoilValue } from 'recoil';
import { itemData } from './../RecoilStates';

export default function Home() {
    window.scrollTo(0, 0);

    const homeCategory = useRecoilValue(homeCategoryState);
    const items = useRecoilValue(itemData)

    return (<>
        <TopNav left={<h2>홈</h2>}
            right={
                <Link to="/select-category">
                    <img alt="메뉴 버튼" src="/icon/hamburger.png" />
                </Link>
            } />
        카테고리: {homeCategory || "전체"}
        {
            // ! 백엔드 측에서 category를 제공하지 않고 있음.
            // homeCategory ?
            //     itemData.filter((item) => item.category === homeCategory).map((item, idx) => <ItemCard item={item} mode="home" key={idx} />)
            //     :
            items.map((item, idx) => <ItemCard item={item} mode="home" key={item} />)
        }
        <BottomNav />
        <Link to="/writing">
            <PlusButton>
                <img alt="플러스 버튼" src="/icon/plus.png" />
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