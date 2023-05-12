import React from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'
import Product from '../data/product'


export const productContext=createContext()


export const Context = ({children}) => {
    const [state,dispatch]=useReducer((state,action)=>{
switch(action.type){
  case 'korzinka': return{...state,korzinka:!state.korzinka}

  case 'buy': let newProduct=state.data.map((value)=>value.id==action.payload.id && {...value,quantity:true})
  newProduct.filter((value)=>value.id && value.id)
  console.log(newProduct[0]);
  let add=state.newBasket.map((value)=>value.id=action.payload.id)



  return {...state,newBasket:newProduct[0]}
}
    },
    {
        data:Product,
        newBasket:[],
        korzinka:false
    })
  return (
    <productContext.Provider value={[state,dispatch]}>
      {children}
    </productContext.Provider>
  )
}

export default Context
