import React, { useState } from 'react';
import ProductPage from './ProductPage';
import './HomePage.css';
import items from './mock.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBars, faUser, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function HomePage() {
  const [itemObject, setItemObject] = useState(items);
  console.log(items);
  const handleUpdateClick = () => {
    setItemObject(itemObject);
  };
  return (
    <div>
      <header className='mainNav'>
        <p className='mainHeaderP'>홈</p>
        <FontAwesomeIcon icon={faBars} className='barIcon' />
      </header>
      <ProductPage itemObject={itemObject} onClick={handleUpdateClick}></ProductPage>
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
