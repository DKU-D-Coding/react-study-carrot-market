import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components"

const Button = styled.div`
    font-size: 70px;
    display: block;
    text-align: center;
    position: fixed;
    right: 20px;
    bottom: 120px;
    color: orange;
    z-index: 9999;
`

function UploadBtn(){
    return(
        <Link to="/upload">
            <Button>
                <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
            </Button>
        </Link>
    )
}

export default UploadBtn;