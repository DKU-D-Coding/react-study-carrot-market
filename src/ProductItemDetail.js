import React from 'react';
import { useParams } from 'react-router';
import { getItemBySlug } from './api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faHouse, faLeftLong, faHeart } from '@fortawesome/free-solid-svg-icons';
import './ProductItemDetail.css';
import UserProduct from './UserProduct';

function ProductItemDetail() {
  const { itemSlug } = useParams();
  const item = getItemBySlug(itemSlug);
  return (
    <>
      <div className='productPageContainer'>
        <div className='productNav'>
          <FontAwesomeIcon icon={faLeftLong} className='backIcon' />
          <FontAwesomeIcon icon={faHouse} className='homeIcon' />
        </div>

        <div className='imageLayer'>
          <div className='imageContainer'>
            <img src={item.imageUrl} alt={item.title} className='productImage'></img>
          </div>
        </div>

        <div className='userLayer'>
          <div className='userContainer'>
            <FontAwesomeIcon icon={faCircleUser} className='userIcon' />
            <p className='ptag'>{item.nickName}</p>
          </div>
          <div>
            <p className='ptag'>{item.title}</p>
            <p className='ptag'>{item.content}</p>
          </div>
        </div>
        <div className='sellingLayer'>
          <div className='sellingContainer'>
            <p className='ptag'>{item.nickName}님의 판매 상품</p>
            <p>모두 보기</p>
          </div>

          <div>
            <UserProduct nickName={item.nickName}></UserProduct>
          </div>
        </div>
        <div className='footLayer'>
          <FontAwesomeIcon icon={faHeart} className='heartIcon' />
          <p className='ptag'>{item.price}</p>
        </div>
      </div>
    </>
  );
}

export default ProductItemDetail;
