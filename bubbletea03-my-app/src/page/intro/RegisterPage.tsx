import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import InputLabel from '../../component/intro/InputLabel';
import SubmitButton from '../../component/intro/SubmitButton';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {

    const navigate = useNavigate();

    const [warningMsg, setWarningMsg] = useState(''); // Warning 메시지
    const [inputState, setInputState] = useState({
        email: '',
        pw: '',
        name: '',
        phone: '',
        nickName: '',
    });

    const handleSubmit = function (e) {
        e.preventDefault()
        axios({
            method: 'post',
            url: 'http://103.218.158.186/api/user/signup',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(inputState)
        }) 
        .then((response) => {
            console.log(response);
            navigate('/login');
        }) 
        .catch((error) => {
            console.log(error);
            setWarningMsg(error.response.data.message);
        });
    }

    const handleInput = function (e) {
        setInputState({ ...inputState, [e.target.name]: e.target.value });
        setWarningMsg('');
    }


    return (<>
        <H2>
            <p>안녕하세요!</p>
            <p>정보를 입력하고 가입해주세요.</p>
        </H2>

        <form onSubmit={handleSubmit}>
            <InputLabel name="email" text="이메일(ID)"
                value={inputState.email} onChange={handleInput}/>

            <InputLabel type="password" name="pw" text="비밀번호(PW)"
                value={inputState.pw} onChange={handleInput} />

            <InputLabel name="name" text="이름"
                value={inputState.name} onChange={handleInput} />

            <InputLabel name="phone" text="핸드폰번호"
                value={inputState.phone} onChange={handleInput} />

            <InputLabel name="nickName" text="닉네임"
                value={inputState.nickName} onChange={handleInput} />

            <SubmitButton value="가입하기" warning={warningMsg}/>
        </form>
    </>);
}

const H2 = styled.h2`
    margin-left: 20px;
    p {
        margin: 0;
    }
`