import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useState } from 'react';
import ModalBasic from './ModalBasic';
import './PostPage.css';
import { Link } from 'react-router-dom';
// import { eventWrapper } from '@testing-library/user-event/dist/utils';

function PostPage() {
  //category
  const categoryList = [
    '디지털기기',
    '생활가전',
    '가구/인테리어',
    '유아동',
    '생활/가공식품',
    '유아도서',
    '스포츠/레저',
    '여성잡화',
    '여성의류',
    '남성패션/잡화',
    '게임/취미',
    '뷰티/미용',
    '반려동물용품',
    '도서/티켓/음반',
    '식물',
    '기타 중고물품',
    '중고차',
  ];
  const [category, setCategory] = useState('디지털기기');

  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = e => {
    e.preventDefault();
    setModalOpen(true);
  };
  const closeModal = e => {
    e.preventDefault();
    setModalOpen(false);
  };
  const [formValue, setFormValue] = useState({ title: '' }, { price: '' }, { content: '' });

  const handleChange = e => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    alert(JSON.stringify(formValue));
  };
  const textareaContent =
    '게시글 내용을 작성해주세요. 가짜 품목 및 판매금지품목은 게시가 제한됩니다.';

  return (
    <div>
      <header>
        <Link to='/'>
          <FontAwesomeIcon icon={faLeftLong}></FontAwesomeIcon>
        </Link>

        <p className='postPageTitle'>중고거래 글쓰기</p>
      </header>
      <form id='form' onSubmit={handleSubmit}>
        <input type='file' />

        <input
          type='text'
          placeholder='제목'
          name='title'
          value={formValue.title}
          onChange={handleChange}
        />

        <div className='categoryContainer'>
          카테고리: {category}
          <button onClick={openModal} className='categoryBtn'>
            카테고리 선택
          </button>
        </div>

        <ModalBasic
          open={modalOpen}
          close={closeModal}
          header='카테고리'
          categoryList={categoryList}
          setCategory={setCategory}
        ></ModalBasic>

        <input
          type='text'
          placeholder='가격(원)'
          name='price'
          value={formValue.price}
          onChange={handleChange}
        />

        <textarea
          placeholder={textareaContent}
          name='content'
          value={formValue.content}
          onChange={handleChange}
        />

        <input type='submit' name='submitbtn' value='완료' />
      </form>
    </div>
  );
}
export default PostPage;
