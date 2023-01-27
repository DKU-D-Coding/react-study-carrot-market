import Header from "../component/home/Header.js";
import Footer from "../component/home/Footer.js";
import ItemCard from "../component/ItemCard.js";

import itemData from "../data/ItemData.js";
import styled from "styled-components";

const StyledBlock = styled.div`
    text-align: center;
    padding-top: 80px;
    padding-bottom: 110px;

    .item-card {
        display: flex;
        
        margin: 20px;
        border-bottom: 1px solid gray;
        padding-bottom: 10px;

        div {
            margin-left: 20px;

            h3 { margin-top: 0; }
        }

        img {
            width: 100px;
            height: 100px;
        }
    }
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

function Home() {
    window.scrollTo(0, 0);
    
    return (
        <StyledBlock>
            <Header/>
            {
                itemData.map((item, idx) => <ItemCard item={item} key={idx}/>)
            }
            <Footer/>
            <PlusButton>
                <img src="/home/plus.png"/>
            </PlusButton>
        </StyledBlock>
    );
}

export default Home;