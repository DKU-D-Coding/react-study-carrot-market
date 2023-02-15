import { useState } from 'react';
import styled from "styled-components";
import CategoryModal from "./CategoryModal"
function Category(){
    
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => { setModalOpen(true) };
    const closeModal = () => { setModalOpen(false) };
    const [category, category_select] = useState("카테고리");

    return(
        <CategoryStyle>
            { 
                modalOpen //default = false, true로 바뀌면 <CategoryModal>이 display
                && <CategoryModal closeModal={closeModal} select={category_select}/>
            }
            <h3>{category}</h3>
            <div onClick={openModal}>
                <h2>▼</h2>
            </div>
        </CategoryStyle>
    );
}
export default Category;

const CategoryStyle = styled.div
`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left:20px;
    padding-right:20px;
    border-bottom: 1px solid gray;
    h2 { cursor: pointer; }
`


