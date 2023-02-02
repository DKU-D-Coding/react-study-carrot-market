import DefaultHeader from './component/Default_Header';
import { useState } from 'react';
import './Upload.css'

function Upload() {
	return (
    <div className="Upload">
      <DefaultHeader title="중고거래 글쓰기"/>
      <PhotoUpload/>
      <TextInput Eng="title" Kor="제목"/>
      <Category />
      <TextInput Eng="price" Kor="가격(원)"/>
      <TextareaInput  />
    </div>
  );
}

export default Upload;



function PhotoUpload() {
    const [img_arr, img_chg] = useState([]);
    const upload_image = function(e) {
        Object.values(e.target.files).forEach(file => {
            const reader = new FileReader();
            reader.onloadend = () => { 
                img_chg(url => [...url, reader.result])
            };
            reader.readAsDataURL(file);
        });
    }

    const delete_image = function(targetIndex) {
        img_chg(img_arr.filter((_, idx) => (idx !== targetIndex)))
    }

    return (
        <div className='photo_upload'>
            <label htmlFor="file">
                <img alt="업로드 버튼" className="upload_button" src='/ui/camera.png'/>
                <input id="file" type="file" accept="image/*" onChange={upload_image} multiple />
            </label>
            {
                img_arr.map((img_url, img_idx) =>
                    <div key={img_idx}>
                        <img alt="업로드 이미지" src={img_url}/>
                        <div className='delete' onClick={() => { delete_image(img_idx) }}>
                            <img alt="삭제 버튼" src="/ui/delete.png"/>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

function TextInput({Eng, Kor}){
    return(
    <div className={Eng}>
        <input type="text" placeholder={Kor}/>
    </div>
    );
}

function TextareaInput({Eng, Kor}){
    return(
    <div className="content">
        <textarea  placeholder="게시글 내용을 작성해주세요. 가짜 품목 및 판매금지 품목은 게시가 제한됩니다."/>
    </div>
    );
}

function Category(){
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => { setModalOpen(true) };
    const closeModal = () => { setModalOpen(false) };
    const [category, category_select] = useState("카테고리");

    return(
        <div className='category'>
            { 
                modalOpen //default = false, true로 바뀌면 <CategoryModal>이 display
                && <CategoryModal closeModal={closeModal} select={category_select}/>
            }
            <h3>{category}</h3>
            <div onClick={openModal}>
                <h2>▼</h2>
            </div>
        </div>
    );
}


function CategoryModal({ closeModal, select }) {
    const category_arr = [
        "디지털기기", "생활가전", "가구/인테리어",
        "유아동", "생활/가공식품", "유아도서",
        "여성의류", "남성패션/잡화", "게임/취미",
        "뷰티/미용", "반려동물용품", "도서/티켓/음반",
        "식물", "기타 중고물품", "중고차"
    ]
    
    return (
        <div className='category_modal'>
            <div className='background' onClick={closeModal}/>
            <section>
                <div className='categories'>
                    {
                        category_arr.map((category, idx) => 
                            <span onClick={() => {select(category); closeModal();}} key={idx}>
                                {category}
                            </span>
                        )
                    }
                </div>
            </section>
        </div>
    );
}


