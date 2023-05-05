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
      <UL.LI>Home</UL.LI>
      <UL.LI>Shop</UL.LI>
      </UL>
      <Button onClick={()=>dispatch({type:'korzinka'})}>korzinka</Button>
    </Container>
  )
}

export default Navbar
