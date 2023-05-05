import React from 'react'
import Home from '../Components/Home'
import Context from '../context'

export const Root = () => {
  return (
    <div>
      <Context>
      <Home/>
      </Context>
    </div>
  )
}

export default Root
