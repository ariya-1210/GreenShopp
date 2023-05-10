import React, { useContext } from 'react'
import { productContext } from '../../context'
import { Container } from './style'

export const Basket = () => {
  const [state,dispatch]=useContext(productContext)
  return (
    <Container>
    {
     state?.newBasket?.map((value)=>{
      return(
        <h1 key={value.id}>{value.name}</h1>
      )
     })
    }
    </Container>
  )
}

export default Basket
