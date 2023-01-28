import Header from "../component/home/Header.js";
import Footer from "../component/home/Footer.js";
import ItemCard from "../component/ItemCard.js";

import itemData from "../data/ItemData.js";
import styled from "styled-components";

export default function Home() {
    window.scrollTo(0, 0);
    
    return (
        <StyledBlock>
            <Header/>
            {
                itemData.map((item, idx) => <ItemCard item={item} mode="home" key={idx}/>)
            }
            <Footer/>
            <PlusButton>
                <img src="/home/plus.png"/>
            </PlusButton>
        </StyledBlock>
    );
}

const StyledBlock = styled.div`
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