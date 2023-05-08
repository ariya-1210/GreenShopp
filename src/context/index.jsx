import React from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'
import Product from '../data/product'
export const productContext=createContext()

export const Context = ({children}) => {
    const [state,dispatch]=useReducer((state,action)=>{
switch(action.type){
  case 'korzinka': return{...state,korzinka:!state.korzinka}
}
    },
    {
        data:Product,
        korzinka:false
    })
  return (
    <productContext.Provider value={[state,dispatch]}>
      {children}
    </productContext.Provider>
  )
}

export default Context
