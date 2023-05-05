import React from 'react'
import { useContext } from 'react'
import { productContext } from '../../context'
import Basket from '../Basket'
import Card from '../Card'
import Navbar from '../Navbar'
import { Container } from './style'

const Home = () => {
  const [state,dispatch]=useContext(productContext)
  return (
    <Container>
      <Navbar/>
      {state.korzinka ? <Basket/> : <Card/> }
    </Container>
  )
}

export default Home
