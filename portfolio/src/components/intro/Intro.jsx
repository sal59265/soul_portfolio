import React from 'react'
import './Intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {
  
  const textRef = useRef();
  useEffect(()=> {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Designer", "Student"]
    })
  },[])
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
          <h3>software engineer and <span ref={textRef}></span>
          </h3>
        </div>
        <a href='#portfolio'/>
      </div>
    </div>
  )
}
