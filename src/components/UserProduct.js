import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { getItemListState } from '../recoil/selector';
import '../style/ProductCard.css';
import UserCard from './UserCard';
function UserProduct({ nickName = 'user1' }) {
  const [nickNameState, setNickNameState] = useState('');
  const itemList = useRecoilValue(getItemListState);
  const [userProductList, setUserProductList] = useState([]);

  const [isMounted, setIsMounted] = useState(false);
  const returnUserProduct = parameter => {
    return itemList.filter(item => item.nickName === parameter);
  };
  useEffect(() => {
    setIsMounted(true);
    setNickNameState(nickName);
    if (isMounted) {
      setUserProductList([...userProductList, ...returnUserProduct(nickNameState)]);
    }
    console.log(userProductList);
    return () => {
      setIsMounted(false);
      setNickNameState('');
    };
  }, [isMounted, nickName]);
  return (
    <div className='itemObjectContainer'>
      {userProductList.map((item, index) => (
        <UserCard key={index} item={item}></UserCard>
      ))}
    </div>
  );
}
export default UserProduct;
