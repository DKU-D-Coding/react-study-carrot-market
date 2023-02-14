import { useState } from 'react';
import styled from 'styled-components';
import CategoryModal from '../component/writing-page/CategoryModal';
import PhotoUpload from '../component/writing-page/PhotoUpload';
import { useEffect } from 'react';
import TopNav from './../component/TopNav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';




export default function WritingPage() {

    const [cookies] = useCookies(['accessToken']);
    const navigate = useNavigate()
    const [categoryModalState, setCategoryModalState] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [writingState, setWritingState] = useState({
        files: [],
        title: "",
        category: "",
        price: "",
        text: "",
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


    const handleSubmit = function (e) {
        const formData = new FormData();
        for (const [key, value] of Object.entries(writingState)) {
            if (key === 'files') {
                value.forEach((file) => formData.append('files', file));
                continue;
            }
            formData.append(key, value);
        }

        console.log(Array.from(formData.keys()));
        console.log(Array.from(formData.values()));
        console.log(Array.from(formData));

        // 글쓰기 API 연결... 작동 X. BAD REQUEST 뜸
        axios.post('http://cors-anywhere.herokuapp.com/http://103.218.158.186/api/item', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + cookies.accessToken
            }
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
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
                <button onClick={handleSubmit}>
                    <OrangeH2>완료</OrangeH2>
                </button>
            } />
        {
            categoryModalState
            && <CategoryModal close={() => setCategoryModalState(false)}
                select={(category) => setWritingState({ ...writingState, category })} />
        }
        <PhotoUpload files={writingState.files}
            setFiles={(files) => setWritingState({ ...writingState, files })} />
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
            <textarea name="text" placeholder="게시글 내용을 작성해주세요. 가짜 품목 및 판매금지품목은 게시가 제한됩니다."
                value={writingState.text} onChange={handleInput} />
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
