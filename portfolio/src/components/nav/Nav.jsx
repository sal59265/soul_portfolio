import React from 'react'
import './Nav.scss'
import {Person, Mail} from "@material-ui/icons"

export default function Nav({hamburgerOpen, setHamburgerOpen}) {
  return (
    <div className={'nav ' + (hamburgerOpen && 'active') }>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro'className='logo'>Soul</a>
          <div className='itemContainer'>
            <Person className='icon'/>
            <span>+44 943 2342</span>
          </div>
          <div className='itemContainer'>
            <Mail className='icon'/>
            <span>df@familcom</span>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={()=> setHamburgerOpen(!hamburgerOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
