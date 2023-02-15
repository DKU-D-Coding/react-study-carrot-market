import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LoginStateAtom } from "../Recoil";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object().shape({
    email: yup
        .string()
        .required('*이메일을 입력해주세요')
        .matches(
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            '*이메일 형식을 확인해주세요'
        ),
    pw: yup
        .string()
        .required('*비밀번호를 입력해주세요')
}).required();

function Login(){
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(false)
    const { register, handleSubmit, formState: { errors }, trigger} = useForm({
        resolver: yupResolver(schema)
    });
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginStateAtom);
    const onSubmit = () => {
        axios({
            method: 'post',
            url: '/login',
            headers: { 
            'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                email: loginState.email,
                pw: loginState.pw,
            })
        }).then((response) => {
            console.log(response.data);
            setIsLoggedIn((prevState) => ({
                ...prevState,
                state: true,
                accessToken: response.data.accessToken,
                refreshToken: response.data.refreshToken,
                nickName: response.data.nickName,
                userId: response.data.userId,
            }));
            navigate('/');
        })
        .catch((error) => {
          console.log(error);
          setLoginError(true)
        }); 
    }

    const [loginState, setLoginState] = useState({
        email: "",
        pw: ""
    })
    const onInput = (e) => {
        const inputName = e.target.name
        switch(inputName) {
            case 'email': 
                trigger('email')
                break
        }
        setLoginState((prevState)=>({
            ...prevState,
            [inputName] : e.target.value,
        }))
    }
    
    return(
    <LoginPageStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>
            안녕하세요!<br/>
            이메일로 로그인해주세요.
            </h2>
            <label>이메일(ID)
                <input {...register("email")} name="email" type="text" onInput={onInput}/>
                {(errors.email)?<p>{errors.email.message}</p>:""}
            </label>
            <label><br/>비밀번호(PW)
                <input {...register("pw")} name="pw" type="password" onInput={onInput}/>
                {(errors.pw)?<p>{errors.pw.message}</p>:""}
            </label>
            {
                loginError?
                <div><br/>
                로그인 오류
                <p>이메일 또는 비밀번호를 다시 확인해주세요</p>
                </div>
                : ""
            }
            <LoginButtonStyle type="submit" >로그인</LoginButtonStyle>
        </form>
     </LoginPageStyle>
    )
}

export default Login

const LoginPageStyle = styled.div
`
display: flex;
flex-direction: column;
margin-left: 15px;
padding-top: 70px;
width:94%;
font-size: 20px;
input {
    width: 100%;
    border-radius: 5px;
    height: 45px;
}
p{color: red;}
`

const LoginButtonStyle = styled.button
`
    width:101%;
    height:45px;
    background-color: orange;
    border: none;
    border-radius:10px;
    color: white;
    font-size: 25px;
    margin-top: 100px;
    margin-bottom:100px;
    cursor: pointer;
`