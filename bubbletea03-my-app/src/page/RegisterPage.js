import styled from 'styled-components';

export default function RegisterPage() {

    window.scrollTo(0, 0);
    return (<>
        안녕하세요! 
        정보를 입력하고 가입해주세요.

        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
    </>);
}

const InputBox = styled.input`
    border: 1px soild black;
`