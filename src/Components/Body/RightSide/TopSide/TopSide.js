import React from 'react'
import './TopSide.css'
import TopTitle from './TopTitle/TopTitle'
import about from '../../../../assets/img/about-me.jpg'
import SideDesc from './SideDesc/SideDesc'


const TopSide = () => {
  return (
    <div class="sidebar-widget">
        <TopTitle/>
        <img src={about} alt="" className="widget-image" />
        <SideDesc />
  </div>
  )
}

export default TopSide