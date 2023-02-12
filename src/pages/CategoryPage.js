import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { itemListFilterState } from '../recoil/atom';
import { faCircleUser, faHouse, faLeftLong, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function CategoryPage() {
  const [filter, setFilter] = useRecoilState(itemListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };
  return (
    <div>
      <Link to='/'>
        <FontAwesomeIcon icon={faHouse} className='homeIcon' />
      </Link>
      <div>
        <p>현재필터:{filter}</p>
        <button value='Show All' onClick={updateFilter}>
          모두 보기
        </button>
        <button value='디지털기기' onClick={updateFilter}>
          디지털기기
        </button>
        <button value='생활가전' onClick={updateFilter}>
          생활가전
        </button>
        <button value='가구/인테리어' onClick={updateFilter}>
          가구/인테리어
        </button>
        <button value='유아동' onClick={updateFilter}>
          유아동
        </button>
        <button value='생활/가공식품' onClick={updateFilter}>
          생활/가공식품
        </button>
        <button value='유아도서' onClick={updateFilter}>
          유아도서
        </button>
        <button value='스포츠/레저' onClick={updateFilter}>
          스포츠/레저
        </button>
        <button value='여성잡화' onClick={updateFilter}>
          여성잡화
        </button>
        <button value='여성의류' onClick={updateFilter}>
          여성의류
        </button>
        <button value='남성패션/잡화' onClick={updateFilter}>
          남성패션/잡화
        </button>
        <button value='게임/취미' onClick={updateFilter}>
          게임/취미
        </button>
        <button value='뷰티/미용' onClick={updateFilter}>
          뷰티/미용
        </button>
        <button value='반려동물용품' onClick={updateFilter}>
          반려동물용품
        </button>
        <button value='도서/티켓/음반' onClick={updateFilter}>
          도서/티켓/음반
        </button>
        <button value='식물' onClick={updateFilter}>
          식물
        </button>
        <button value='기타 중고물품' onClick={updateFilter}>
          기타 중고물품
        </button>
        <button value='중고차' onClick={updateFilter}>
          중고차
        </button>
      </div>
    </div>
  );
}
export default CategoryPage;
