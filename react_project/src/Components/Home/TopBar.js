import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

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
`

function TopBar(){
    return(
        <Bar>
            홈
            <FontAwesomeIcon icon={faBars}/>
        </Bar>
    )
}


export default TopBar;