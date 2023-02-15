import styled from "styled-components";
import BackButton from './BackButton'

function Header3({title}){
  return(
    <Header3Style>
      <BackButton />
      <h1> {title} </h1>
      <h2> 완료 </h2>
    </Header3Style>
  );
}
export default Header3;

const Header3Style = styled.div
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
  h2{ padding-right: 30px; color: orange; cursor: pointer; }
`