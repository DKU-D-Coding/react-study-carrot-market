import React from 'react';
import { getUserProductList } from './api';
import './ProductPage.css';
function UserProduct({ nickName }) {
  console.log(nickName);
  const userProductList = getUserProductList(nickName);
  return (
    <>
      <div>
        {userProductList.map(item => {
          return (
            <div key={item.id} className='itemContainer'>
              <img src={item.imageUrl} className='itemImage' alt={item.title}></img>

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
        })}
      </div>
    </>
  );
}
export default UserProduct;
