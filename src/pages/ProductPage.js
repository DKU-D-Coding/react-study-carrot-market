import { useState, useEffect, React } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faHouse, faLeftLong, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../style/ProductPage.css';
import UserProduct from '../components/UserProduct';
import Carousel from '../components/Carousel';
import { useRecoilValue } from 'recoil';
import { getItemListState } from '../recoil/selector';
function ProductPage() {
  const itemList = useRecoilValue(getItemListState);
  const { itemSlug } = useParams();
  const [itemObject, setItemObject] = useState({});
  const [isMounted, setIsMounted] = useState(false);
  const itemBySlug = itemSlug => {
    return itemList.find(item => item.slug === itemSlug);
  };

  useEffect(() => {
    setIsMounted(true);

    if (isMounted) {
      setItemObject({ ...itemObject, ...itemBySlug(itemSlug) });
    }
    console.log(itemObject.nickName);
    return () => {
      setIsMounted(false);
    };
  }, [isMounted, itemSlug]);

  // const getListFromApi = async itemSlug => {
  //   const item = await getItemBySlug(itemSlug);
  //   setItemObject({ ...itemObject, ...item });
  // };
  // useEffect(() => {
  //   getListFromApi(itemSlug);
  // }, []);
  return (
    <>
      <div className='productPageContainer'>
        <div className='productNav'>
          <Link to='/'>
            <FontAwesomeIcon icon={faLeftLong} className='backIcon' />
          </Link>
          <Link to='/'>
            <FontAwesomeIcon icon={faHouse} className='homeIcon' />
          </Link>
        </div>

        {/* <div className='imageLayer'>
        <div className='imageContainer'>
          <img src={itemObject.imageUrl[0]} alt={itemObject.title} className='productImage'></img>
        </div>
      </div> */}
        <Carousel imageList={itemObject.imageUrl}></Carousel>
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
    </>
  );
}

export default ProductPage;
