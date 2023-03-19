import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
        <ul>
            <li><a className="current-page" href="#">Home</a></li>
            <li><a href="#">About me</a></li>
            <li><a href="#">Recent posts</a></li>
        </ul>
    </nav>
  )
}

export default Nav