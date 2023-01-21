import styled from "styled-components";
import {
    faHome,
    faUser
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";


const Bar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    position: fixed;
    bottom: 0;
    background-color: white;
    border-top: 1px solid #333;
    justify-content: space-evenly;
    font-size: 30px;
    text-align: center;
    
    p {
        font-size: 14px;
    }
`

function BottomBar(){
    return(
        <Bar>
            <div>
                <Link to="/">
                <FontAwesomeIcon icon={faHome} />
                <p>홈</p>
                </Link>
            </div>
            <div>
                <FontAwesomeIcon icon={faUser} />
                <p>나의 당근</p>
            </div>
        </Bar>
    )
}

export default BottomBar;