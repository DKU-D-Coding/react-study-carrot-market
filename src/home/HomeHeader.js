import styled from "styled-components";
import { Link } from 'react-router-dom'
import { useSetRecoilState } from "recoil";
import { categoryFilter } from "../Recoil";

function HomeHeader() {
    const setCategory = useSetRecoilState(categoryFilter);
    return (
        <HomeHeaderStyle>
            <HomeButtonSytle onClick={() => { setCategory("전체"); window.scrollTo(0, 0) }}>
                <h1>홈</h1>
            </HomeButtonSytle>
            <MenuButtonStyle>
                <Link to="/select-category" >
                    <img alt="메뉴버튼" src="/ui/menu_button.png" />
                </Link>
            </MenuButtonStyle>
        </HomeHeaderStyle>
    );
}

export default HomeHeader;

const HomeHeaderStyle = styled.div
`
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;
    background-color: white;
    z-index: 100;
`

const HomeButtonSytle = styled.div
`
    h1{
        cursor: pointer;
        padding-left : 40px;
        font-size: 40px;
        padding-bottom : 8px;
    }
`


const MenuButtonStyle = styled.div
`
    img{
        width: 65px;
        height: 65px;
    }
    cursor: pointer;
    padding-right:10px;
    padding-top: 7px;
`
