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
export {Container,Image,Description}