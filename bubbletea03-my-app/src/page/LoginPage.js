import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

export default function LoginPage() {

    const [inputState, setInputState] = useState({
        email: '',
        pw: '',
    });

    const handleSubmit = function() {
        axios({
            method: 'post',
            url: 'http://103.218.158.186/api/user/login',
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
        });
    }
    return (<>
        로그인하기

        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
        }}>
            <label>
                <p>이메일(ID)</p>
                <InputBox type="text" value={inputState.email} onChange={(e) => {
                    setInputState({...inputState, email: e.target.value})
                }}/>
            </label>

            <label>
                <p>비밀번호(PW)</p>
                <InputBox type="text" value={inputState.pw} onChange={(e) => {
                    setInputState({...inputState, pw: e.target.value})
                }}/>
            </label>
            
            <input value="[로그인]" type="submit"/>
        </form>
    </>);
}

const InputBox = styled.input`
    display: block;
    margin: 20px;
    border: 1px solid black;
`