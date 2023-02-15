import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { LoginStateAtom } from "../Recoil";
import { useNavigate } from "react-router-dom";
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
        .required('*비밀번호를 입력해주세요'),
    name: yup
        .string()
        .required('*이름을 입력해주세요'),      
    phone: yup
        .string()
        .required('*핸드폰번호를 입력해주세요'), 
    nickName: yup
        .string()
        .required('*닉네임을 입력해주세요'), 
}).required();

function SignUp(){
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginStateAtom);
    const [loginError, setLoginError] = useState(false);
    const { register, handleSubmit, formState: { errors }, trigger} = useForm({
        resolver: yupResolver(schema)
    });
    const navigate = useNavigate();
    const onSubmit = () => {
        axios({
            method: 'post',
            url: '/signup',
            headers: { 
            'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                email: inputState.email,
                password: inputState.pw,
                cname: inputState.name,
                phone: inputState.phone,
                nickname: inputState.nickName
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
    const [inputState, setInputState] = useState({
        email: '',
        pw: '',
        name: '',
        phone: '',
        nickName: ''
    });
    const onInput = (e) => {
        const inputName = e.target.name
        switch(inputName) {
            case 'email': 
                trigger('email')
                break
        }
        setInputState((prevState) => ({
            ...prevState,
            [inputName]: e.target.value
        }));
    }

    return(
        <SignUpStyle>
            <form onSubmit={handleSubmit(onSubmit)}>
                     <h2>안녕하세요!<br/>정보를 입력하고 가입해주세요.</h2>
                    <label>
                        이메일(ID)
                        <input {...register("email")} name="email" type="text" onInput={onInput}/>
                        {(errors.email)?<p>{errors.email.message}</p>:""}
                    </label>

                    <label>비밀번호(PW)
                        <input {...register("pw")} name="pw" type="password"  onInput={onInput}/>
                        {(errors.pw)?<p>{errors.pw.message}</p>:""}
                    </label>

                    <label>이름
                        <input {...register("name")} name="name" type="text"  onInput={onInput}/>
                        {(errors.name)?<p>{errors.name.message}</p>:""}
                    </label>

                    <label>핸드폰번호
                        <input {...register("phone")} name="phone" type="number"  onInput={onInput}/>
                        {(errors.phone)?<p>{errors.phone.message}</p>:""}
                    </label>

                    <label>닉네임
                        <input {...register("nickName")} name="nickName" type="text"  onInput={onInput}/>
                        {(errors.nickName)?<p>{errors.nickName.message}</p>:""}
                    </label>
                    {
                        loginError?
                        <div><br/>
                        가입 오류
                        <p>중복된 이메일 계정이 존재합니다</p>
                        </div>
                        : ""
                    }
                <SignUpButtonStyle type="submit">가입하기</SignUpButtonStyle>
            </form>
        </SignUpStyle>
    )
}

export default SignUp;

const SignUpStyle = styled.div
`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    padding-top: 40px;
    width:94%;
    font-size: 20px;
    input {
        width: 100%;
        border-radius: 5px;
        height: 45px;
    }
    p{color: red;}
`

const SignUpButtonStyle = styled.button
`
    width:101%;
    height:45px;
    background-color: orange;
    border: none;
    border-radius:10px;
    color: white;
    font-size: 25px;
    margin-top: 30px;
    margin-bottom:100px;
    cursor: pointer;
`