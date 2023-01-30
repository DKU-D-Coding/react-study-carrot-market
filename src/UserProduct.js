import React from 'react';
import { getUserProductList } from './api';
import './ProductPage.css';
import UserCard from './UserCard';
function UserProduct({ nickName }) {
  console.log(nickName);
  const userProductList = getUserProductList(nickName);
  return (
    <div className='itemObjectContainer'>
      {userProductList.map(item => (
        <UserCard key={item.id} item={item}></UserCard>
      ))}
    </div>
  );
}
export default UserProduct;
