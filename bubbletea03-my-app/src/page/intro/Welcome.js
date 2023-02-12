import SubmitButton from "../../component/intro/SubmitButton";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Welcome() {

    const navigate = useNavigate();

    return (<>
        <WelcomeContainer>
            <img alt="당근" src="/icon/carrot.png"/>
            <h2>당신 근처의 Karrot 마켓</h2>
            <p>중고 거래부터 동네 정보까지,</p>
            <p>지금 내 동네를 선택하고 시작해보세요!</p>
        </WelcomeContainer>

        <form onSubmit={() => {navigate('/register')}}>
            <SubmitButton value="시작하기"/>
        </form>

        <P>
            이미 계정이 있나요? 
            <Link to='/login'>로그인</Link>
        </P>
    </>);
}

const WelcomeContainer = styled.div`
    text-align: center;
    margin: 30% 0;
    
    img {
        width: 180px;
        height: 180px;
    }

    h2, p {
        margin: 5px;
    }
`

const P = styled.p`
    text-align: center;

    a {
        margin-left: 5px;
        color: orange;
    }
`