import React from 'react'
import './Intro.scss'

export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imageContainer'>
          <img src="assets/image.png" alt='image'/>
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi there I am</h2>
          <h1>Soul Lee</h1>
          <h3>Ahhhh
            <span>
            </span>
          </h3>
        </div>
      </div>
    </div>
  )
}
