import React, { useState } from 'react';
import { useEffect } from 'react';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBars, faUser, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getItems } from './api';
import ProductCard from './ProductCard';

function HomePage() {
  const [itemList, setItemList] = useState([]);
  const getList = async () => {
    const data = await getItems();
    setItemList([...itemList, ...data]);
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <header className='mainNav'>
        <p className='mainHeaderP'>홈</p>
        <FontAwesomeIcon icon={faBars} className='barIcon' />
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
