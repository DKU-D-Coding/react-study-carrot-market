import { useParams, useNavigate } from 'react-router-dom';
import UserContent from '../component/product-page/UserContent';
import UserItemList from '../component/product-page/UserItemList';
import styled from 'styled-components';
import itemData from '../data/ItemData';
import BottomNav from './../component/product-page/BottomNav';
import TopNav from '../component/TopNav';
import { Link } from 'react-router-dom';

export default function ProductPage() {
    const navigate = useNavigate();
    const params = useParams();
    const [item] = itemData.filter(item => item.id == params.itemId);

    window.scrollTo(0, 0);
    return (<>
        <TopNav left={<>
            <button onClick={() => { navigate(-1) }}>
                <img alt="왼쪽 화살표" src="/icon/arrow.png" />
            </button>
            <Link to="/">
                <img alt="홈 아이콘" src="/icon/home.png" />
            </Link>
        </>} />
        <TopImage>
            <img alt="대표 이미지" src="https://media.istockphoto.com/id/1352173787/photo/sunset.jpg?b=1&s=170667a&w=0&k=20&c=jKDMxKXALm540OTFB3vMIDFYwOEedauorSpvLgjkU1M=" />
        </TopImage>
        <UserContent item={item} />
        <UserItemList userName={item.sellerName} />
        <BottomNav />
    </>);
}

const TopImage = styled.div`
    width: 100%;
`