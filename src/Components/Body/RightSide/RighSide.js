import React from 'react'
import './RightSide.css'
import TopSide from './TopSide/TopSide'
import DownSide from './DownSide/DownSide'

const RighSide = () => {
  return (
    <aside className="sidebar">
        <TopSide />
        <DownSide />
     </aside>
  )
}

export default RighSide