import React, { useState, useEffect } from 'react';
import '../style/HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBars, faUser, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { getItemListState } from '../recoil/selector';
import { itemListFilterState } from '../recoil/atom';
function HomePage() {
  const [isMounted, setIsMounted] = useState(false);
  const category = useRecoilValue(itemListFilterState);
  console.log(category);
  const [itemList, setItemList] = useRecoilState(getItemListState);

  console.log(itemList);
  useEffect(() => {
    if (isMounted) {
      setItemList(itemList);
    }
    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
    <div>
      <header className='mainNav'>
        <p className='mainHeaderP'>홈</p>
        <Link to='/signup'>
          <p>회원가입</p>
        </Link>
        <Link to='/signin'>
          <p>로그인</p>
        </Link>
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
