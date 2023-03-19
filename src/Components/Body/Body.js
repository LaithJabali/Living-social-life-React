import React from 'react'
import './Body.css'
import LeftSide from './LeftSide/LeftSide'
import RightSide from './RightSide/RighSide'


const Body = () => {
  return (
    <div class="container-flex container">
        <LeftSide/>
        <RightSide/>
        
    </div>
  )
}

export default Body