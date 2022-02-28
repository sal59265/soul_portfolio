import React from 'react'
import "./Menu.scss"

export default function Menu({hamburgerOpen, setHamburgerOpen }) {
  return (
    <div className={'menu '+(hamburgerOpen && 'active')}>
      <ul>
        <li onClick={()=>setHamburgerOpen(false)}>
          <a href='#intro'>Home</a>
        </li>
        <li onClick={()=>setHamburgerOpen(false)}>
        <a href='#portfolio'>Portfolio</a>
        </li>
        <li onClick={()=>setHamburgerOpen(false)}>
        <a href='#works'>Works</a>
        </li>
        <li onClick={()=>setHamburgerOpen(false)}>
        <a href='#footer'>Footer</a>
        </li>
      </ul>
    </div>
  )
}
