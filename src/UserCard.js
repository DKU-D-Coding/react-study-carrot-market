import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';
function UserCard({ item }) {
  return (
    <div key={item.id} className='itemContainer'>
      <img src={item.imageUrl[0]} className='itemImage' alt={item.title}></img>
      <div className='itemDetail'>
        <p>상품명: {item.title}</p>
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
