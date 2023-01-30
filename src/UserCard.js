import React from 'react';
import './ProductPage.css';
import { Link } from 'react-router-dom';
function UserCard({ item, key }) {
  return (
    <div key={key} className='itemContainer'>
      <img src={item.imageUrl} className='itemImage' alt={item.title}></img>
      <div className='itemDetail'>
        <Link to={`/${item.slug}`}>
          <p>상품명: {item.title}</p>
        </Link>
        <p>가격: {item.price}</p>
        <p className='itemHeart'>
          {'\u2764'}&nbsp;
          {item.heart}
        </p>
      </div>
    </div>
  );
}

export default UserCard;
