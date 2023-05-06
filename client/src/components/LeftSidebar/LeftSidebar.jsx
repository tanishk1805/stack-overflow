import React from 'react'
import { NavLink } from 'react-router-dom'
import globe from '../../assets/Globe.svg'

import './LeftSidebar.css'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
      <NavLink to='/' className='side-nav-links' activeclassname='active' > <p>Home</p></NavLink>
      <div className='side-nav-div'>
      <div> <p>PUBLIC</p></div>
      <NavLink className='side-nav-links' to='/Questions' activeclassname='active' style={{paddingLeft:'40px'}}>
        <img src={globe} alt='globe' />
         <p style={{paddingLeft:'10px'}}>Questions</p></NavLink>
      <NavLink to='/Tag' style={{paddingLeft:'40px'}} className='side-nav-links'> <p>Tags</p></NavLink>
      <NavLink to='/Users' style={{paddingLeft:'40px'}} className='side-nav-links'> <p>Users</p></NavLink>

      </div>
      </nav>
    </div>
  )
}

export default LeftSidebar
