import { faArrowLeft, faBars, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { selectCategoryAtom } from "../../atom";

const Bar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    background-color: white;
    border-bottom: 1px solid #333;
    padding: 0 30px;
    box-sizing: border-box;
    justify-content: space-between;
    font-size: 30px;
    z-index: 999;
`
const Title = styled.h2`
    font-weight: bold;
    font-size: 24px;
    margin: 0;
    align-self: center;
    .centeredTitle>& {
        text-align:center;
        width: 100%;
        font-size: 1.7rem;
    }
`
const CompleteBtn = styled.button`
    color: #FF931E;
    width: 48px;
    font-weight: bold;
    font-size: 24px;
    padding: 0;
    margin: 0;
`
const LeftSpace = styled.div`
    &.hidden {
        display: none;
    }
    .homeMargin {
        margin-left: 20px;
    }
`
function TopBar(props){
    const navigate = useNavigate();
    const [categoryFilter, setCategoyFilter] = useRecoilState(selectCategoryAtom);
    const homeClick = () => {
        setCategoyFilter("")
    }
    return(
        <Bar className={(props.centeredTitle)?"centeredTitle":""}>
            <LeftSpace className={(props.previousBtn||props.homeBtn)?"both":"hidden"}>
                {(props.previousBtn)?
                    <button onClick={() => {navigate(-1)}}>
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </button> : ""
                }
                {(props.homeBtn)?
                    <Link to="/">
                        <FontAwesomeIcon className={categoryFilter?"":"homeMargin"} icon={faHome} onClick={homeClick}/>
                    </Link> : ""
                } 
            </LeftSpace>
            {(props.title)?
                <Title>
                    {props.title}
                </Title> : ""
            }
            {(props.completeBtn)?
                <CompleteBtn>
                    완료
                </CompleteBtn> : ""
            }            
            {(props.menuBtn)?
                <Link to="category">
                    <FontAwesomeIcon icon={faBars}/>
                </Link>
                :""
            }
        </Bar>
    )
}


export default TopBar;