import React from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'
import Product from '../data/product'


export const productContext=createContext()


export const Context = ({children}) => {
    const [state,dispatch]=useReducer((state,action)=>{
switch(action.type){
  case 'korzinka': return{...state,korzinka:!state.korzinka}

  case 'buy':
  let newProduct=state.data.map((value)=> value.id===action.payload.id && 
  {...value,addtoCard:true,quantity:value.quantity+1})
 
  newProduct=newProduct.filter((value)=>value && value)
  let add=[...state.basket,...newProduct]
  let newData=state.data.map((value)=> value.id===action.payload.id ? {...newProduct[0]}:value )
   
  return {...state,data:newData,basket:add}

  case 'plus':
    let plus=state.data.map((value)=> value.id===action.payload.id && {...value,quantity:value.quantity+1})
  return {...state}
}
    },
    {
        data:Product,
        basket:[],
        korzinka:false
    })
  return (
    <productContext.Provider value={[state,dispatch]}>
      {children}
    </productContext.Provider>
  )
}

export default Context
