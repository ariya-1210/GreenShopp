import React, { useContext } from 'react'
import { Button, Container, Description, Image } from './style'
import { productContext } from '../../context'

export const Card = () => {
  const [state,dispatch]=useContext(productContext)
  console.log(state.data);
  return (
    <Container>
      {
        state.data.map((value)=>{
          return(
            <div key={value.id}>
              <Image src={value.image}/>
              <Description>{value.name}</Description>
              <Description><b>{value.price}</b></Description>
              {
                value.addtoCard ? ( <Button>Cancel</Button> )
                 :               
                 (<Button onClick={()=>dispatch({type:'buy',payload:{id:value.id}})}>Buy</Button>)
              }

            </div>
          )
        })
      }
    </Container>
  )
}

export default Card
