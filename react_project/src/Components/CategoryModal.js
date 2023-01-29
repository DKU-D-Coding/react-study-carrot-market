import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const categoryList = [
    "디지털기기", "생활가전", "가구/인테리어", "유아동", "생활/가공식품",
    "유아도서", "여성의류", "남성패션/잡화", "게임/취미", "뷰티/미용", "반려동물용품",
    "도서/티켓/음반", "식물", "기타 중고물품", "중고차"
]
const Background = styled.div `
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(196, 196, 196, 0.8);
    z-index: 1000;
`
const Modal = styled.ul`
    width: 300px;
    min-height: 300px;
    background-color: white;
    list-style: none;
    box-sizing: border-box;
    padding: 30px 50px;
    position: absolute;
    z-index: 1001;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const List = styled.li`
    margin-bottom: 20px;
`
function CategoryModal(props){
    const [clickedCate, setClickedCate] = useState()
    const cancleModal = () => {
        props.changeModalState(false)
    }
    const selectCategory = (e) => {
        setClickedCate(e.target.innerHTML)
        cancleModal();
    }
    useEffect(()=>{
        props.getCateResult(clickedCate)
    },[selectCategory])
    return(
        <>
            { props.visibility?
                <>
                <Background onClick={cancleModal}/> 
                <Modal>
                    {categoryList.map((item,index) =>
                        <List 
                            key={index} 
                            onClick={selectCategory}
                        >
                            {item}
                        </List>
                    )}
                </Modal> 
                </>:"" 
            }
        </>
    )
}

export default CategoryModal;