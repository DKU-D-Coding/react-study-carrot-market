import { Link } from 'react-router-dom';
import BackButton from '../component/BackButton';
import styled from "styled-components";

function ProductHeader() {
    return (
      <>
        <HomeButtonStyle>
          <Link to="/" >
            <img alt="홈 버튼" src="/ui/home_button.png" 
            onClick={() => { window.scrollTo(0, 0) }}/>
          </Link>
        </HomeButtonStyle>
        
        <BackButtonStyle>
        <BackButton />
        </BackButtonStyle>
      </>
    );
}

export default ProductHeader;

const HomeButtonStyle = styled.div
`
  position: fixed;
  padding-left: 90px;
  img { width: 50px; height: 50px; }
`

const BackButtonStyle = styled.div
`
  position: fixed;
`