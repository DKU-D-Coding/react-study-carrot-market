import ItemCard from "../component/ItemCard";
import styled from "styled-components";
import BottomNav from '../component/home/HomeBottomNav';
import { Link } from 'react-router-dom';
import TopNav from "../component/TopNav";
import { homeCategoryState } from "../RecoilStates";
import { useRecoilValue } from 'recoil';
import { itemData } from '../RecoilStates';
import { useEffect, useState } from "react";
import axios from 'axios';
import { useCookies } from 'react-cookie';

export default function Home() {
    window.scrollTo(0, 0);

    const homeCategory = useRecoilValue(homeCategoryState);
    const items = useRecoilValue(itemData);
    const [cookies] = useCookies(['accessToken']);
    const [likedItems, setLikedItems] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: '/api/like/user',
            headers: {
                'Authorization': 'Bearer ' + cookies.accessToken,
            },
        })
        .then((response) => {
            const likedItemsData = response.data.data.content;
            setLikedItems(likedItemsData);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])

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
            items.map((item) => {
                // item.itemId
                // item.itemId가 likedItems안에 포함되는가
                let isLiked = Boolean(...likedItems.filter((likedItem) => likedItem.itemId === item.itemId));
                console.log(likedItems.filter((likedItem) => likedItem.itemId === item.itemId), isLiked);
                return <ItemCard item={item} mode="home" key={item.itemId} isLiked={isLiked} />
            })
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