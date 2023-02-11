import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

export default function RegisterPage() {

    const [warningModalMsg, setWarningModalMsg] = useState(''); // Warning 메시지

    const [inputState, setInputState] = useState({
        email: '',
        pw: '',
        name: '',
        phone: '',
        nickName: '',
    });

    const handleSubmit = function() {
        axios({
            method: 'post',
            url: 'http://103.218.158.186/api/user/signup',
          headers: { 
            'Content-Type': 'application/json'
          },
            data: JSON.stringify(inputState)
        })
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
            setWarningModalMsg(error.response.data.message);
        });
    }
    return (<>
        <TitleH2>
            <p>안녕하세요!</p> 
            <p>정보를 입력하고 가입해주세요.</p>
        </TitleH2>

        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
        }}>
            <InputLabel>
                <p>이메일(ID)</p>
                <input type="text" value={inputState.email} onChange={(e) => {
                    setInputState({...inputState, email: e.target.value});
                    setWarningModalMsg('');
                }}/>
            </InputLabel>

            <InputLabel>
                <p>비밀번호(PW)</p>
                <input type="password" value={inputState.pw} onChange={(e) => {
                    setInputState({...inputState, pw: e.target.value});
                    setWarningModalMsg('');
                }}/>
            </InputLabel>

            <InputLabel>
                <p>이름</p>
                <input type="text" value={inputState.name} onChange={(e) => {
                    setInputState({...inputState, name: e.target.value});
                    setWarningModalMsg('');
                }}/>
            </InputLabel>

            <InputLabel>
                <p>핸드폰번호</p>
                <input type="text" value={inputState.phone} onChange={(e) => {
                    setInputState({...inputState, phone: e.target.value});
                    setWarningModalMsg('');
                }}/>
            </InputLabel>

            <InputLabel>
                <p>닉네임</p>
                <input type="text" value={inputState.nickName} onChange={(e) => {
                    setInputState({...inputState, nickName: e.target.value});
                    setWarningModalMsg('');
                }}/>
            </InputLabel>
            
            {
                warningModalMsg
                ?
                    <RegisterInputBtn value={warningModalMsg} type="button" bgcolor="lightcoral"/>
                    :
                    <RegisterInputBtn value="가입하기" type="submit"/>
            }
        </form>
    </>);
}

const TitleH2 = styled.h2`
    margin-left: 20px;
    p {
        margin: 0;
    }
`

const InputLabel = styled.label`
    display: block;
    margin: 40px 0;
    
    p {
        margin: 0;
        margin-left: 10%;
        font-size: large;
    }
    
    input {
        display: block;
        width: 80%;
        height: 45px;
        margin: 0 auto;
        font-size: large;
        border: 1px solid black;
        border-radius: 10px;
    }
`

const RegisterInputBtn = styled.input`
    display: block;
    width: 95%;
    height: 50px;
    font-size: x-large;
    margin: 0 auto;
    margin-top: 60px;
    background-color: ${({bgcolor}) => bgcolor || "orange"};
    color: white;
`