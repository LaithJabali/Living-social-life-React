import React from 'react'
import './SideWidget.css'
import RecentSidePost from './RecentSidePost/RecentSidePost'

const SideWidget = () => {
  return (
    <div className="sidepostwidget"> 
        <RecentSidePost />
    </div>
  )
}

export default SideWidget