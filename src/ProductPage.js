import React from 'react';
import './ProductPage.css';
import { Link } from 'react-router-dom';
function ProductPage({ itemObject }) {
  return (
    <div className='itemObjectContainer'>
      {itemObject.map(element => {
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

export default ProductPage;
