import React from 'react'
import "./PostContent.css"
import Recent from "./Recent/Recent"
import Main from "./Main/Main"

const PostsContent = () => {
  return (
    <article className="article-recent">
        <Main/>
        <Recent/> 
    </article>
  )
}

export default PostsContent