import { useParams } from 'react-router-dom';
import Footer from '../component/product-page/Footer';
import Header from '../component/product-page/Header';
import UserContent from '../component/product-page/UserContent';
import UserItemList from '../component/product-page/UserItemList';
import styled from 'styled-components';
import itemData from '../data/ItemData';

export default function ProductPage() {
    const params = useParams();
    const [ item ] = itemData.filter(item => item.id == params.itemId);

    window.scrollTo(0, 0);
    return (
        <StyledBlock>
            <Header/>
            <Footer/>
            <div className="top-image">
                <img src="https://media.istockphoto.com/id/1352173787/photo/sunset.jpg?b=1&s=170667a&w=0&k=20&c=jKDMxKXALm540OTFB3vMIDFYwOEedauorSpvLgjkU1M="/>
            </div>
            <UserContent item={item}/>
            <UserItemList userName={item.sellerName}/>
        </StyledBlock>
    );
}

const StyledBlock = styled.div`
    padding-top: 80px;
    padding-bottom: 100px;

    .top-image img {
        width: 100%;
    }
`