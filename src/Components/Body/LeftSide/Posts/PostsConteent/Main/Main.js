import React from 'react'
import PostsTitle from './PostsTitle/PostsTitle'
import PostsBody from './PostsBody/PostsBody'
import ContReading from '../../../MainPost/ContReading/ContReading'

const Main = () => {
  return (
    <div className="article-recent-main">
        <PostsTitle />
        <PostsBody/>
        <ContReading />
   </div>
  )
}

export default Main