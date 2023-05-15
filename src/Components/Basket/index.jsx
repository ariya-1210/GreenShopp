import React, { useContext } from 'react'
import { productContext } from '../../context'
import { Container } from './style'

export const Basket = () => {
  const [state,dispatch]=useContext(productContext)
  return (
    <Container>
    {
     state?.basket?.map((value)=>{
      return(
        <h1 key={value.id}>{value.name} {value.quantity}
        <button onClick={()=>dispatch({type:'plus',payload:{id:value.id}})}></button>
        </h1>
      )
     })
    }
    </Container>
  )
}

export default Basket
