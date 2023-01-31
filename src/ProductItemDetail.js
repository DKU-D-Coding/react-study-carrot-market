import React from 'react';
import { useParams } from 'react-router';
import { getItemBySlug } from './api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faHouse, faLeftLong, faHeart } from '@fortawesome/free-solid-svg-icons';
import './ProductItemDetail.css';
import UserProduct from './UserProduct';
import { useState } from 'react';
import { useEffect } from 'react';
//이미지가 여러장일 경우의 코드를 추가
//판매상품 카드를 눌렀을 때 이동 할 수 있도록 Link 구현
//뒤로가기 버튼, 홈버튼 link 구현
//모두보기 구현
//하트 기능 구현
//user 이미지는 유저 데이터에 저정했다가 뿌려주는 것으로 구현

function ProductItemDetail() {
  const { itemSlug } = useParams();
  const [itemObject, setItemObject] = useState({});
  const getListFromApi = async itemSlug => {
    const item = await getItemBySlug(itemSlug);
    setItemObject(item);
  };
  console.log(itemObject);
  useEffect(() => {
    getListFromApi(itemSlug);
  }, [itemSlug]);
  return (
    <div className='productPageContainer'>
      <div className='productNav'>
        <FontAwesomeIcon icon={faLeftLong} className='backIcon' />
        <FontAwesomeIcon icon={faHouse} className='homeIcon' />
      </div>

      <div className='imageLayer'>
        <div className='imageContainer'>
          <img src={itemObject.imageUrl} alt={itemObject.title} className='productImage'></img>
        </div>
      </div>

      <div className='userLayer'>
        <div className='userContainer'>
          <FontAwesomeIcon icon={faCircleUser} className='userIcon' />
          <p className='ptag'>{itemObject.nickName}</p>
        </div>
        <div>
          <p className='ptag'>{itemObject.title}</p>
          <p className='ptag'>{itemObject.content}</p>
        </div>
      </div>
      <div className='sellingLayer'>
        <div className='sellingContainer'>
          <p className='ptag'>{itemObject.nickName}님의 판매 상품</p>
          <p>모두 보기</p>
        </div>

        <div>
          <UserProduct nickName={itemObject.nickName}></UserProduct>
        </div>
      </div>
      <div className='footLayer'>
        <FontAwesomeIcon icon={faHeart} className='heartIcon' />
        <p className='ptag'>{itemObject.price}</p>
      </div>
    </div>
  );
}

export default ProductItemDetail;
