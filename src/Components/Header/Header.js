import React from 'react'
import './Header.css'
import LeftHeader from './LeftHeader/LeftHeader'
import RightHeader from './RightHeader/RightHeader'

const Header = () => {
  return (
    <header className='header'> 
        <div className='left'>
            <LeftHeader />
        </div>
        <div className='right'>
            <RightHeader />
        </div>
    </header>
  )
}

export default Header