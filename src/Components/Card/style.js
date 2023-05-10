import styled from "styled-components";

const Container= styled.div`
display:grid;
grid-template-columns: repeat(3,1fr);
gap: 30px;
margin-left:250px;
margin-bottom:100px;
`
const Image=styled.img`
`
const Description=styled.p`
font-size:{({fs})=>fs&&fs};
font-weight:{({fw})=>fw&&fw};
color:{({color})=>color&&color};
`
const Button=styled.button`
height:30px;
width:50%;
border:none;
border-radius:10px;
background-color:#7431F8;
margin-top:10px;
color:white;
cursor:pointer;
:active{
    transform:scale(0.97);
}
`

export {Container,Image,Description,Button}