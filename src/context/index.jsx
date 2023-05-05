import React from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'
export const productContext=createContext()

export const Context = ({children}) => {
    const [state,dispatch]=useReducer(()=>{},
    {
        button:'Korzinka',
        korzinka:false
    })
  return (
    <productContext.Provider value={[state,dispatch]}>
      {children}
    </productContext.Provider>
  )
}

export default Context
