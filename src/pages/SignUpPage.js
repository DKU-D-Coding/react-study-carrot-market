import React from 'react';
import { useState } from 'react';
import axios from 'axios';
function SignUpPage() {
  const [formValue, setFormValue] = useState({
    email: '',
    pw: '',
    name: '',
    phone: '',
    nickName: '',
  });
  const handleChange = e => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    alert(JSON.stringify(formValue));
    axios.post('http://103.218.158.186/api/user/signup', formValue).then(res => console.log(res));
  };
  return (
    <div>
      회원가입하기
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
