import ItemCard from "../component/ItemCard.js";
import itemData from "../data/ItemData.js";
import styled from "styled-components";
import BottomNav from './../component/home/BottomNav';
import { Link } from 'react-router-dom';
import { testState } from "../RecoilStates.js";
import { useRecoilState } from "recoil";
import TopNav from "../component/TopNav.js";

export default function Home() {
    window.scrollTo(0, 0);

    const [test, setTest] = useRecoilState(testState);
    
    return (<>
        <TopNav left={<h2>홈</h2>}
            right={
            <button>
                <img alt="메뉴 버튼" src="/icon/hamburger.png"/>
            </button>
        }/>
        <div onClick={() => {setTest("ㅎㅁㄴㅇㄹ")}}>ddd{test}</div>
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