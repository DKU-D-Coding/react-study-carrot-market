import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';
function ProductCard({ itemList }) {
  return (
    <div className='itemObjectContainer'>
      {itemList.map(element => {
        return (
          <div key={element.id} className='itemObject'>
            <ProductItem item={element}></ProductItem>
          </div>
        );
      })}
    </div>
  );
}

function ProductItem({ item }) {
  return (
    <div className='itemContainer'>
      <img src={item.imageUrl[0]} alt={item.title} className='itemImage'></img>
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

export default ProductCard;
