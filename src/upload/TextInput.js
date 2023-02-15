import styled from "styled-components";

function TextInput({inputText}){
    return(
    <TextInputStyle>
        <input type="text" placeholder={inputText}/>
    </TextInputStyle>
    );
}

export default TextInput;

const TextInputStyle = styled.div
`
    height: 70px;
    border-bottom: 1px solid gray; 
    input{
        padding-left: 20px; 
        width: 100%;
        height: 100%;
        font-size: 20px;
        border: none;
        border-bottom: 1px solid gray;
    }
`

