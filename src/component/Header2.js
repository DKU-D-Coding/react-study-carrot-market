
import styled from "styled-components";
import BackButton from './BackButton'

function Header2({title}){
  return(
    <Header2Style>
      <BackButton />
      <h1> {title} </h1>
      <h2> 완료 </h2>
      </Header2Style>
  );
}
export default Header2;

const Header2Style = styled.div
`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  background-color: white;
  h1{ padding-bottom: 2px; }
  h2{ padding-right: 30px; visibility:hidden}
`