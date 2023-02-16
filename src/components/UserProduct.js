import React from 'react';
import '../style/ProductCard.css';
import { Link } from 'react-router-dom';
function UserProduct({ userItem }) {
  return (
    <div className='itemContainer'>
      <img src={userItem.imageUrl[0].url} className='itemImage' alt={userItem.title}></img>
      <div className='itemDetail'>
        <Link to={`/${userItem.slug}`}>
          <p>상품명: {userItem.title}</p>
        </Link>
        <p>가격: {userItem.price}</p>
        <p className='itemHeart'>
          {'\u2764'}&nbsp;
          {userItem.heart}
        </p>
      </div>
    </div>
  );
}
export default UserProduct;
