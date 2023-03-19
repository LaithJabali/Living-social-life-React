import React from 'react'
import Date from './Date/Date'
import ArticleTitle from './ArticleTitle/ArticleTitle'
import MainImg from "../../../../../src/assets/img/life.jpg"
import ContReading from "./ContReading/ContReading"


const MainPost = () => {
  return (
    <article className="article-featured">
        <img src={MainImg} className='Main-img'></img>
        <Date />
        <ArticleTitle />
        <p className="article-body">
            <strong>Life can get complicated really quickly</strong>, but it
            doesn't have to be! There are many ways to simplify your life,
            <a href="#">a few of which we've explored in the past</a>. This week
            we're taking a bit of a approach though, in how you can find
            simplicity in the life you already living.
        </p>
        <ContReading />
     </article>
    )
}

export default MainPost