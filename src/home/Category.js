import DefaultHeader from '../component/Header2';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue } from "recoil";
import { categoryData, categoryFilter } from "../Recoil";



function Category() {
  const navigate = useNavigate();
  const setCategory = useSetRecoilState(categoryFilter);
  const CATEGORY = useRecoilValue(categoryData);
	return (
    <>
      <DefaultHeader title="중고거래 카테고리" text=" "/>
      <SelectedCategoryStyle>
        {
          CATEGORY.map((category, idx) => 
            <button key={idx} onClick={() => { setCategory(category); navigate('/'); }}>
              {category}
            </button>
          )
        }
      </SelectedCategoryStyle>
    </>
  );
}

export default Category;


const SelectedCategoryStyle = styled.div`
    margin-top: 70px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 30px;
    text-align: center;

    button {
        height: 100px;
        border: none;
        background: white;

        &:hover {
            background-color: lightgray;
            transition: 0.2s;
        }
    }
`

