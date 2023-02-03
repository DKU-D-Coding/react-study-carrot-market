import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getUserProductList } from './api';
import './ProductCard.css';
import UserCard from './UserCard';
function UserProduct({ nickName = 'user1' }) {
  console.log(nickName);
  const [userProductList, setUserProductList] = useState([]);
  const getProduct = async nickName => {
    const data = await getUserProductList(nickName);
    setUserProductList(data);
  };
  useEffect(() => {
    getProduct(nickName);
  }, [nickName]);
  return (
    <div className='itemObjectContainer'>
      {userProductList.map(item => (
        <UserCard key={item.id} item={item}></UserCard>
      ))}
    </div>
  );
}
export default UserProduct;
