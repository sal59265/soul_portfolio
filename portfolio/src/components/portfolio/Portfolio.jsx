import React from 'react'
import { useState } from 'react'
import './Portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList'

export default function Portfolio() {
  const [selected, setSelected] = useState("Projects")
  const list = [
    {
      id: 'Projects',
      title: "Projects"
    },
    {
      id: 'Skills',
      title: "Skills"
    },
    {
      id: 'Education',
      title: "Education"
    },

  ]
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map(item=>(
          <PortfolioList 
          title={item.title} 
          active={selected === item.id} 
          setSelected={setSelected}
          id = {item.id}
          />
        ))}
      </ul>
      <div className='container'>
        <div className='item'>
          <img src='./assets/typing.png' alt="typing"/>
          <h3>Typing App</h3>
        </div>
        <div className='item'>
          <img src='./assets/typing.png' alt="typing"/>
          <h3>Typing App</h3>
        </div>
        <div className='item'>
          <img src='./assets/typing.png' alt="typing"/>
          <h3>Typing App</h3>
        </div>
        <div className='item'>
          <img src='./assets/typing.png' alt="typing"/>
          <h3>Typing App</h3>
        </div>
      </div>
    </div>
  )
}
