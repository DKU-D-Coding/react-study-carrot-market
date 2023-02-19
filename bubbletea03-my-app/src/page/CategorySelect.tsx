import TopNav from "../component/TopNav";
import { useNavigate } from 'react-router-dom';
import { CATEGORY_LIST } from "../data/Consts";
import styled from 'styled-components';
import { useSetRecoilState } from "recoil";
import { homeCategoryState } from "../RecoilStates";
import * as shortid from "shortid";



export default function CategorySelect() {
    const navigate = useNavigate();
    const setCategory = useSetRecoilState(homeCategoryState);

    return (<>
        <TopNav left={
            <button onClick={() => { navigate(-1) }}>
                <img alt="왼쪽 화살표" src="/icon/arrow.png" />
            </button>
        }
            center={
                <h2>중고거래 카테고리</h2>
            } />
        <CategoryContainer>
            {
                CATEGORY_LIST.map((category, idx) =>
                    <button key={shortid.generate()} onClick={() => {
                        setCategory(category);
                        navigate('/');
                    }}>
                        {category}
                    </button>
                )
            }
        </CategoryContainer>
    </>);
}

const CategoryContainer = styled.div`
    display: grid;
    padding: 30px;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr;

    button {
        height: 100px;
        
        &:hover {
            background-color: lightgray;
            transition: 0.2s;
        }
    }
`