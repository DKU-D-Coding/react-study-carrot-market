import styled from "styled-components";
  
function HomeFooter() {
    return (
        <HomeFooterSytle>
          <HomeButtonSytle>
            <img alt="홈 버튼" src="/ui/home_button.png"/>
            <h2>홈</h2>
          </HomeButtonSytle>
          <MyButtonSytle>
            <img alt="마이 버튼"  src="/ui/my_button.png"/>
            <h2>나의 당근</h2>
          </MyButtonSytle>
        </HomeFooterSytle>
    );
}

export default HomeFooter;

const HomeFooterSytle = styled.div`
    text-align: center;
    position: fixed; 
    bottom: 0;
    width: 100%;
    height: 110px;
  
    display: flex;
    justify-content: space-around;
    
    border-top: 2px solid gray;
    background-color: white;

    h2{ margin: 0; }
    img{ width: 70px; height: 70px;} 

`
const HomeButtonSytle = styled.div` cursor: pointer;`
const MyButtonSytle = styled.div`cursor: pointer;`

