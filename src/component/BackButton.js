import { useNavigate } from 'react-router-dom'
import styled from "styled-components";

function BackButton(){
  const navigate = useNavigate();
  return(
    <BackButtonStyle>
        <img alt="뒤로가기" src="/ui/back_button.png" 
        onClick={() => {navigate(-1)}} />
    </BackButtonStyle>
  );
}
export default BackButton;

const BackButtonStyle = styled.div
`
  img{
    width: 50px;
    height: 50px;
    cursor: pointer;
    padding-left: 20px;
    paddint-top: 4px;
  }
`