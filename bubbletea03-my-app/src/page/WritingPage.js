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
    let [isMounted, setIsMounted] = useState(false);
    let [writingState, setWritingState] = useState({
        imgUrlArr: [],
        title: "",
        category: "",
        price: "",
        content: "",
    });

    useEffect(() => {
        if (!isMounted) {
            setIsMounted(true);
            const localWritingState = JSON.parse(localStorage.getItem('writingState'));
            localWritingState && setWritingState(localWritingState);
            return;
        }
        localStorage.setItem('writingState', JSON.stringify(writingState));
    }, [writingState])

    const handleInput = function (e) {
        setWritingState({ ...writingState, [e.target.name]: e.target.value })
    }

    return (<>
        <TopNav
            left={
                <button onClick={() => { navigate(-1) }}>
                    <img alt="왼쪽 화살표" src="/icon/arrow.png" />
                </button>
            }
            center={<h2>중고거래 글쓰기</h2>}
            right={
                <button>
                    <OrangeH2>완료</OrangeH2>
                </button>
            } />
        {
            categoryModalState
            && <CategoryModal close={() => setCategoryModalState(false)}
                select={(category) => setWritingState({ ...writingState, category })} />
        }
        <PhotoUpload imgUrlArr={writingState.imgUrlArr}
            setImgUrlArr={(imgUrlArr) => setWritingState({ ...writingState, imgUrlArr })} />
        <InputBox>
            <input type="text" name="title" placeholder="제목"
                value={writingState.title} onChange={handleInput} />
        </InputBox>
        <CategoryBox>
            <h3>{writingState.category || "카테고리"}</h3>
            <button onClick={() => setCategoryModalState(true)}>
                <h3>▼</h3>
            </button>
        </CategoryBox>
        <InputBox>
            <input type="number" name="price" placeholder="가격(원)"
                value={writingState.price} onChange={handleInput} />
        </InputBox>
        <ContentBox>
            <textarea name="content" placeholder="게시글 내용을 작성해주세요. 가짜 품목 및 판매금지품목은 게시가 제한됩니다."
                value={writingState.content} onChange={handleInput} />
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

const OrangeH2 = styled.h2`
    color: orange;
`
