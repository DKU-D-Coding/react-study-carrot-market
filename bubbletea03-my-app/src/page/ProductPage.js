import { useParams } from 'react-router-dom';
import UserContent from '../component/product-page/UserContent';
import UserItemList from '../component/product-page/UserItemList';
import styled from 'styled-components';
import itemData from '../data/ItemData';
import TopNav from './../component/product-page/TopNav';
import BottomNav from './../component/product-page/BottomNav';
import { useRecoilState } from 'recoil';
import { testState } from '../RecoilStates';

export default function ProductPage() {
    const params = useParams();
    const [ item ] = itemData.filter(item => item.id == params.itemId);
    const [test, setTest] = useRecoilState(testState);

    window.scrollTo(0, 0);
    return (
        <Container>
            <TopNav/>
            <BottomNav/>
            <div onClick={() => {setTest("ㅇㅇㅋㅋ")}}>ddd{test}</div>
            <TopImage>
                <img alt="대표 이미지" src="https://media.istockphoto.com/id/1352173787/photo/sunset.jpg?b=1&s=170667a&w=0&k=20&c=jKDMxKXALm540OTFB3vMIDFYwOEedauorSpvLgjkU1M="/>
            </TopImage>
            <UserContent item={item}/>
            <UserItemList userName={item.sellerName}/>
        </Container>
    );
}

const Container = styled.div`
    padding-top: 80px;
    padding-bottom: 100px;
`

const TopImage = styled.div`
    width: 100%;
`