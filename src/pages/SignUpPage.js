import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { LoginState } from '../recoil/atom';
function SignUpPage() {
  const [formValue, setFormValue] = useState({
    email: '',
    pw: '',
    name: '',
    phone: '',
    nickName: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const handleChange = e => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    alert(
      JSON.stringify({
        email: formValue.email,
        pw: formValue.pw,
        name: formValue.name,
        phone: formValue.phone,
        nickName: formValue.nickName,
      })
    );
    axios({
      method: 'post',
      url: '/api/user/signup',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(formValue),
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
      .catch(error => {
        console.log('An error occured:', error);
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
      <p>정보를 입력하고 가입해주세요.</p>
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
        <input
          type='text'
          placeholder='이름'
          name='name'
          value={formValue.name}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='핸드폰 번호'
          name='phone'
          value={formValue.phone}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='사용자 이름'
          name='nickName'
          value={formValue.nickName}
          onChange={handleChange}
        />
        <input type='submit' name='submitbtn' value='회원가입 하기' />
      </form>
    </div>
  );
}

export default SignUpPage;
