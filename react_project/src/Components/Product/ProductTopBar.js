import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate} from "react-router-dom";
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
    font-size: 30px;
    gap: 30px;
    z-index: 999;
`

function ProductTopBar(){
    const navigate = useNavigate();

    return(
        <Bar>
            <button onClick={() => {navigate(-1)}}>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </button>
            <Link to="/">
                <FontAwesomeIcon icon={faHome}/>
            </Link>
        </Bar>
    )
}


export default ProductTopBar;