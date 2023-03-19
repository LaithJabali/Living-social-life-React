import React from 'react'
import './Recent.css'
import RecentsImg from './RecentsImg/RecentsImg'
import Date from '../../../MainPost/Date/Date'

const Recent = () => {
  return (
    <div className="article-recent-secondary">
        <RecentsImg />
        <Date />
   </div>
  )
}

export default Recent