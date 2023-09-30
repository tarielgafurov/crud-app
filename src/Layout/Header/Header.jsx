import styled from 'styled-components'
import ButtonCom from '../../Components/UI/Button';

const Header = (props) => {


  return (
    <HeaderStyled>
      <Title>Commets ...</Title>
        <ButtonCom variant="contained" onClick={props.openForm} >open form</ButtonCom>
    </HeaderStyled>
  )
}


export default Header;

const HeaderStyled = styled.header`
    width: 100%;
    height: 55px;
    background-color: #9e9d9d;
    border: none;  
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Title = styled.h1`
    padding: 5px 40px;
    color: white;
`
