import { useState, useEffect } from 'react';
import styled from "styled-components";

function TextareaInput(){
    const [text, setText] = useState("기본 글");
    function onChange(e){ 
        const { target: {value}} = e;
        setText(value); 
        localStorage.setItem("text", value);
    }
    useEffect(() => { setText(localStorage.getItem("text")); 
}, []);
    return(
    <TextareaStyle>
        <textarea  onChange = {onChange} value={text} 
        placeholder="게시글 내용을 작성해주세요. 가짜 품목 및 판매금지 품목은 게시가 제한됩니다." />
    </TextareaStyle>
    );
}

export default TextareaInput;


const TextareaStyle = styled.div 
`
padding-top: 20px;
font-weight: 600;
textarea{
    padding-left: 15px; 
    width: 100%;
    height: 100%;
    font-size: 20px;
    border: none;
    border-bottom: 1px solid gray;
}
`