import { useState } from 'react';
import styled from "styled-components";


function HeartButton({heart}){
    const [url, setUrl] = useState("/ui/heart_button.png");
    return(
        <HeartStyle onClick={()=>{setUrl("/ui/red_heart.png")}}>
        <img alt="하트 버튼" src={url}  /> <h2>{heart}</h2>
        </HeartStyle>
    );
}

export default HeartButton;

const HeartStyle = styled.div
`
    img{
        position: absolute;
        left: 330px;
        top:50%;
        width: 25px;
        height: 25px;
    }
    h2{
        position: absolute;
        left: 370px;
        top: 27%;
    }
`