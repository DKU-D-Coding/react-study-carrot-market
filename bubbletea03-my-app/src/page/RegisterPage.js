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

    // TODO
    // TODO: 회원가입과 로그인 페이지가 완전 겹침. 하나의 커스텀 컴포넌트를 만들고, input 개수 조절가능하게 가자.
    // TODO

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
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
                setWarningModalMsg(error.response.data.message);
            });
    }

    const handleInput = function (e) {
        // Key값은 대괄호로 묶어야 실제값이 Key가 된다. (대괄호안쓰면 string으로 쳐서 SyntaxError뜸)
        setInputState({ ...inputState, [e.target.name]: e.target.value });
        setWarningModalMsg('');
    }


    return (<>
        <TitleH2>
            <p>안녕하세요!</p>
            <p>정보를 입력하고 가입해주세요.</p>
        </TitleH2>

        <form onSubmit={handleSubmit}>
            <InputLabel>
                <p>이메일(ID)</p>
                <input type="text" name="email" value={inputState.email} onChange={handleInput} />
            </InputLabel>

            <InputLabel>
                <p>비밀번호(PW)</p>
                <input type="password" name="pw" value={inputState.pw} onChange={handleInput} />
            </InputLabel>

            <InputLabel>
                <p>이름</p>
                <input type="text" name="name" value={inputState.name} onChange={handleInput} />
            </InputLabel>

            <InputLabel>
                <p>핸드폰번호</p>
                <input type="text" name="phone" value={inputState.phone} onChange={handleInput} />
            </InputLabel>

            <InputLabel>
                <p>닉네임</p>
                <input type="text" name="nickName" value={inputState.nickName} onChange={handleInput} />
            </InputLabel>

            {
                warningModalMsg
                    ?
                    <RegisterInputBtn value={warningModalMsg} type="button" bgcolor="lightcoral" />
                    :
                    <RegisterInputBtn value="가입하기" type="submit" />
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
    background-color: ${({ bgcolor }) => bgcolor || "orange"};
    color: white;
`