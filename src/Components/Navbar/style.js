import styled from "styled-components";
import {ReactComponent as logo} from '../../assets/icon/logo.svg'

const Container= styled.div`
height: 60px;
border-bottom: 1px solid green;
display:flex;
justify-content: space-around ; 
align-items: center;
`
const Icon= styled.div`
`
Icon.Logo= styled(logo)`
width:35px;
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
gap: 20px;
`
UL.LI=styled.li`
list-style-type:none;
`
const Button=styled.button`
`

export {Container, Icon,Description,UL,Button}