import React from 'react'
import './LeftSide.css'
import MainPost from './MainPost/MainPost'
import Posts from './Posts/Posts'

const LeftSide = () => {
  return (
    <main role="main">
        <MainPost />
        <Posts />
    </main>
  )
}

export default LeftSide