import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import InputLabel from '../../component/intro/InputLabel';
import SubmitButton from '../../component/intro/SubmitButton';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';


// TODO: RegisterPage와 LoginPage가 거의 겹친다. 더 통합할 수 없을까?

export default function LoginPage() {

    const navigate = useNavigate();

    const [warningMsg, setWarningMsg] = useState('');
    const [inputState, setInputState] = useState({
        email: '',
        pw: '',
    });


    const [cookies, setCookie] = useCookies(['nickName', 'accessToken', 'refreshToken']);

    const handleSubmit = function(e) {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://103.218.158.186/api/user/login',
          headers: { 
            'Content-Type': 'application/json'
          },
            data: JSON.stringify(inputState)
        }) 
        .then((response) => {
            console.log(response);
            const result = response.data.data;
            const options = { path: '/', httpOnly: true };
            setCookie('nickName', result.nickName, options);
            setCookie('accessToken', result.accessToken, options);
            setCookie('refreshToken', result.refreshToken, options);
            navigate('/');
        }) 
        .catch((error) => {
            console.log(error);
            setWarningMsg(error.response.data.message)
        });
    }

    const handleInput = function (e) {
        setInputState({...inputState, [e.target.name]: e.target.value});
        setWarningMsg('');
    }
    
    return (<>
        <H2>
            <p>안녕하세요!</p>
            <p>이메일로 로그인해주세요.</p>
        </H2>

        <form onSubmit={handleSubmit}>
            <InputLabel name="email" text="이메일(ID)"
                value={inputState.email} onChange={handleInput}/>

            <InputLabel type="password" name="pw" text="비밀번호(PW)"
                value={inputState.pw} onChange={handleInput}/>

            <SpaceBox/>
            
            <SubmitButton value="로그인" warning={warningMsg}/>
        </form>
    </>);
}

const H2 = styled.h2`
    margin-left: 20px;
    p {
        margin: 0;
    }
`

const SpaceBox = styled.div`
    height: 30vh;
`