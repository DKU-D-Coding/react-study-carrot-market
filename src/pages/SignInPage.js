import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { LoginState } from '../recoil/atom';

function SignInPage() {
  const [formValue, setFormValue] = useState({
    email: '',
    pw: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const navigate = useNavigate();
  const backPage = () => {
    navigate(-1);
  };
  const handleChange = e => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    alert(JSON.stringify(formValue));
    if (formValue.email === '' || formValue.pw === '') {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    axios({
      method: 'post',
      url: '/api/user/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        email: formValue.email,
        pw: formValue.pw,
      }),
    })
      .then(response => {
        console.log(response.data.data);
        localStorage.setItem('accessToken', response.data.data.accessToken);
        localStorage.setItem('refreshToken', response.data.data.refreshToken);
        localStorage.setItem('userId', response.data.data.userId);
        localStorage.setItem('nickName', response.data.data.nickName);
        setIsLoggedIn(true);
        navigate('/');
      })
      .catch(err => {
        console.log('An error occurred:', err);
      });
  };
  useEffect(() => {
    if (
      localStorage.getItem('accessToken') &&
      localStorage.getItem('accessToken') !== 'undefined'
    ) {
      navigate('/');
    }
  }, []);
  return (
    <div>
      <p>안녕하세요!</p>
      <p>이메일로 로그인해주세요.</p>
      <form id='form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='이메일'
          name='email'
          value={formValue.email}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='패스워드'
          name='pw'
          value={formValue.pw}
          onChange={handleChange}
        />

        <input type='submit' name='submitbtn' value='로그인' />
      </form>
    </div>
  );
}

export default SignInPage;
