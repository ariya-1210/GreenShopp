import styled from "styled-components";
import {ReactComponent as logo} from '../../assets/icon/logo.svg'

const Container= styled.div`
height: 60px;
border-bottom: 1px solid green;
display:flex;
justify-content: space-around ; 
align-items: center;
margin-bottom:50px;
/* box-shadow: 10px 10px 10px #46a35952; */
/* background-color:#46a35952; */
`
const Icon= styled.div`
`
Icon.Logo= styled(logo)`
width:35px;
margin-right: 10px;
`

const Description= styled.p`
color:{({color})=> color && color};
font-size:20px;
text-transform:uppercase;
font-weight: 700;
display:flex;
justify-content: center ; 
align-items: center;
`
const UL=styled.ul`
display:flex;
justify-content: center ; 
align-items: center;
gap: 70px;
margin: 0 20px;
`
UL.LI=styled.li`
list-style-type:none;
`
const Button=styled.button`
width: 100px;
height:35px ;
background-color: #46A358;
color: white;
border: none;
border-radius: 8px;
cursor: pointer;
:active{
    transform: scale(0.97);
}
`

export {Container, Icon,Description,UL,Button}
