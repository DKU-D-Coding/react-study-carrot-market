import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { categoryData } from "../Recoil";

function CategoryModal({ closeModal, select }) {
    const CATEGORY_LIST = useRecoilValue(categoryData);
    
    return (
        <CategoriesStyle>
            <ModalBackground onClick={closeModal}/>
            <section>
                <CategoryModalStyle>
                    {
                        CATEGORY_LIST.map((category, idx) => 
                            <span onClick={() => {select(category); closeModal();}} key={idx}>
                                {category}
                            </span>
                        )
                    }
                </CategoryModalStyle>
            </section>
        </CategoriesStyle>
    );
}

export default CategoryModal;

const ModalBackground = styled.div `width: 100%; height: 100%;`
const CategoriesStyle = styled.div
`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    section{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        height: 90%;
        background-color: white;
    }
`

const CategoryModalStyle = styled.div
`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 40px;
    box-sizing: border-box;
    span{
        text-align: center;
        height: 100%;
        padding-top: 10px;
        &:hover{
            background-color: lightgray;
            transition: 0.2s;
        }
    }

`