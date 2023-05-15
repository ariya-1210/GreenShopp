import React from 'react'
import { useContext } from 'react'
import { productContext } from '../../context'
import { Button, Container, Description, Icon, UL } from './style'

export const Navbar = () => {
  const [state,dispatch]=useContext(productContext)
  return (
    <Container>

      <Description color=' #46A358' > <Icon.Logo/> Greenshop</Description>
      <UL>
      <UL.LI> <b>Home</b></UL.LI>
      <UL.LI> <b>Shop</b></UL.LI>
      <UL.LI> <b>Contacts</b></UL.LI>
      <UL.LI> <b>Phone</b></UL.LI>
      </UL>
      <Button onClick={()=>dispatch({type:'korzinka'})}>
        korzinka {state.basket.length}
        </Button>
    </Container>
  )
}

export default Navbar
