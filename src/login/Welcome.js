import { Link } from "react-router-dom"
import styled from "styled-components"

function Welcome(){
    return(
        <WelcomePageStyle>
            <img src="/ui/logo.png"/>
            <h1>당신 근처의 Karrot 마켓</h1>
            <span>
                중고 거래부터 동네 정보까지, <br/>
                지금 내 동네를 선택하고 시작해보세요!
            </span>
            
            <Link to="/signup">
                <StateButtonStyle>시작하기</StateButtonStyle>
            </Link>

            <div>
                이미 계정이 있나요?
                <Link to="/login">
                    로그인
                </Link>
            </div>
        </WelcomePageStyle>
    )
}

export default Welcome

const WelcomePageStyle = styled.div
`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding-top:100px;
    img{ width: 300px; height: 300px; }
    span{ padding-bottom:100px;}
    div{
        margin-top:15px;
        a{
            margin-left:5px;
            color: orange;
            text-decoration: none;
        }
    }
`

const StateButtonStyle = styled.button
`
    border:none;
    background-color: orange;
    color: white;
    font-size: 30px;
    padding-top:5px;
    padding-bottom:5px;
    padding-left: 150px;
    padding-right: 150px;
    cursor:pointer;
`