import React, { useState, useEffect } from 'react';
import '../style/HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBars, faUser, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import { itemListFilterState } from '../recoil/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LoginState } from '../recoil/atom';
function HomePage() {
  const category = useRecoilValue(itemListFilterState);
  const [itemList, setItemList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  useEffect(() => {
    async function getItemAxios() {
      const res = await axios.get('http://localhost:3001/items');
      setItemList(res.data);
    }
    getItemAxios();
  }, []);
  const logoutHandler = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('nickName');
    setIsLoggedIn(false);
  };
  return (
    <div>
      <header className='mainNav'>
        <p className='mainHeaderP'>홈</p>
        <p>현재 카테고리: {category}</p>
        <Link to='/boforelogin'>
          <p>처음이라면</p>
        </Link>
        <Link to='/boforelogin/signup'>
          <p>회원가입</p>
        </Link>
        {isLoggedIn ? (
          <button onClick={() => logoutHandler()}>로그아웃</button>
        ) : (
          <Link to='/boforelogin/signin'>
            <p>로그인</p>
          </Link>
        )}
        <Link to='/category'>
          <FontAwesomeIcon icon={faBars} className='barIcon' />
        </Link>
      </header>
      <ProductCard itemList={itemList}></ProductCard>
      <div className='mainFoot'>
        <button className='mainFootContainer1'>
          <FontAwesomeIcon icon={faHouse} />
          <p>홈</p>
        </button>
        <button className='mainFootContainer2'>
          <FontAwesomeIcon icon={faUser} />
          <p>나의 당근</p>
        </button>
      </div>
      <Link to='/post'>
        <FontAwesomeIcon icon={faCirclePlus} className='plusIcon' />
      </Link>
    </div>
  );
}

export default HomePage;
