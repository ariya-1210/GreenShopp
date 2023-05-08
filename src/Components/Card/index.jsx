import React, { useContext } from 'react'
import Navbar from '../Navbar'
import { Container, Description, Image } from './style'
import { productContext } from '../../context'


export const Card = () => {
  const [state,dispatch]=useContext(productContext)
  return (
    <Container>
      {
        state.data.map((value)=>{
          return(
            <div>
              <Image src={value.image}/>
              <Description>{value.name}</Description>
              <Description><b>{value.price}</b></Description>
            </div>
          )
        })
      }
    </Container>
  )
}

export default Card
