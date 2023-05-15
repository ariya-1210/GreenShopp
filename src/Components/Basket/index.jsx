import React, { useContext } from 'react'
import { productContext } from '../../context'
import { Container, Table, Image,Minus,Plus} from './style'


export const Basket = () => {
  const [state,dispatch]=useContext(productContext)
  return (
    <Container>
      {state.basket.length ?
      <h3>Sizda {state.basket.length} ta mahsulot  bor</h3> : 
      <h3>Siz mahsulot  harid  qilmadingiz</h3> }
    

    <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Pruduct</Table.Th>
            <Table.Th>Tittle</Table.Th>
            <Table.Th>Prise</Table.Th>
            <Table.Th>Quantity</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
        {
     state?.basket?.map((value)=>{
      return(
        <Table.Tr key={value.id}>
        <Table.Td> <Image src={value.image}/> </Table.Td>
        <Table.Td>{value.name}</Table.Td>
        <Table.Td>{value.price}</Table.Td>
        
        <Table.Td>
           <Plus/> {value.quantity} <Minus/> 
        </Table.Td>
        

        <button onClick={()=>dispatch({type:'plus',payload:{id:value.id}})}>Plus</button>
        <button onClick={()=>dispatch({type:'delet',payload:{id:value.id}})}>Delet</button>
        </Table.Tr>
      )
     })
    }
        </Table.Tbody>
    </Table>
    </Container>
  )
}

export default Basket
