import { useState } from 'react';
import styled from 'styled-components';
import CategoryModal from '../component/writing-page/CategoryModal';
import PhotoUpload from '../component/writing-page/PhotoUpload';
import { useEffect } from 'react';
import TopNav from './../component/TopNav';
import { useNavigate } from 'react-router-dom';




export default function WritingPage() {
    const navigate = useNavigate()
    const [categoryModalState, setCategoryModalState] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");

    let [writingState, setWritingState] = useState({
        imgUrls: [],
        title: "",
        category: "",
        price: "",
        content: "",
    });

    // ONLY MOUNT
    useEffect(() => {
        if (localStorage.getItem('writingState'))
            setWritingState(JSON.parse(localStorage.getItem('writingState')))
    }, [])
    
    const saveWritingState = function() {
        localStorage.setItem('writingState', JSON.stringify(writingState));
    }

    return (<>
        <TopNav 
            left={
                <button onClick={() => {navigate(-1)}}>
                    <img alt="왼쪽 화살표" src="/icon/arrow.png"/>
                </button>
            }
            center={<h2>중고거래 글쓰기</h2>}
            right={
            <button>
                <h2>완료</h2>
            </button>
            }/>
        { 
            categoryModalState
            && <CategoryModal close={() => {setCategoryModalState(false)}} select={setSelectedCategory}/>
        }
        <PhotoUpload/>
        <InputBox>
            <input type="text" placeholder="제목" value={writingState.title} 
                onChange={(e) => {
                    setWritingState({...writingState, title: e.target.value});
                    setTimeout(() => {
                        console.log(writingState);
                        localStorage.setItem('writingState', JSON.stringify(writingState));}
                    , 1000)}
                }/>
        </InputBox>
        <CategoryBox>
            <h3>{selectedCategory || "카테고리"}</h3>
            <button onClick={() => {setCategoryModalState(true)}}>
                <h3>▼</h3>
            </button>
        </CategoryBox>
        <InputBox>
            <input type="number" placeholder="가격(원)"/>
        </InputBox>
        <ContentBox>
            <textarea placeholder="게시글 내용을 작성해주세요. 가짜 품목 및 판매금지품목은 게시가 제한됩니다."/>
        </ContentBox>
    </>);
}

const ContentBox = styled.div`
    width: 100%;
    height: 200px;
    textarea {
        width: 100%;
        height: 100%;
        padding: 20px;
        overflow-wrap: anywhere;
    }
`

const CategoryBox = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    * {
        padding: 0px 20px;
    }
`

const InputBox = styled.div`
    height: 70px;
    border-bottom: 1px solid gray;
    input {
        padding-left: 15px;
        width: 100%;
        height: 100%;
        font-size: 20px;
    }
`
