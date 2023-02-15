import { Link } from 'react-router-dom';
import styled from "styled-components";

function PlusButton() {
    return (
        <PlusButtonSytle>
        <Link to="/upload" className="plus_button">
          <img alt="업로드 버튼" src="/ui/plus_button.png"/>
        </Link>
        </PlusButtonSytle>
    );
}

export default PlusButton;

const PlusButtonSytle = styled.div
`
    position: fixed;
    right: 15px;
    bottom: 145px;
    cursor: pointer;
    img{ width: 100px; height: 100px; }
`
