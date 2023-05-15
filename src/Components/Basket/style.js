import styled from "styled-components";
import {AiFillPlusCircle} from  'react-icons/ai'
import {AiFillMinusCircle} from 'react-icons/ai'


const Container= styled.div`
width:90%;
margin: 0 auto;
`
const Table=styled.table`
    width: 70%;
    margin: 20px auto;


`
Table.Tbody=styled.tbody`
`
Table.Thead=styled.thead`
`
Table.Tr=styled.tr`
`
Table.Th=styled.th`
padding:10px 20px;

`
Table.Td=styled.td`
text-align:center;
padding:10px 20px;

`
const Image=styled.img`
width:75px;
height:75px;
`
const Plus=styled(AiFillPlusCircle)`
cursor: pointer;
`
const Minus=styled(AiFillMinusCircle)`
cursor: pointer;
`
export {Container,Table,Image,Minus,Plus}