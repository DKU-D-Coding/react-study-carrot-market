import { useState, useEffect, React } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faHouse, faLeftLong, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../style/ProductPage.css';
import UserProduct from '../components/UserProduct';
import Carousel from '../components/Carousel';
import axios from 'axios';
function ProductPage() {
  const { itemSlug } = useParams();
  // const location = useLocation();
  const [itemList, setItemList] = useState([]);
  const [itemObject, setItemObject] = useState({});
  const [userItemList, setUserItemList] = useState([]);

  const getItemBySlug = async itemSlug => {
    const res = await axios.get('http://localhost:3001/items');
    const resList = res.data;
    setItemList(resList);
    const slugItem = resList.find(item => item.slug === itemSlug);
    const userProductList = resList.filter(item => item.nickName === slugItem.nickName);
    setUserItemList(userProductList);
    setItemObject(slugItem);
  };
  useEffect(() => {
    getItemBySlug(itemSlug);
  }, [itemSlug]);
  useEffect(() => {
    // code that depends on itemList state
    console.log(itemList);
  }, [itemList]);
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
            {userItemList.map(item => {
              return <UserProduct key={item.id} userItem={item}></UserProduct>;
            })}
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
