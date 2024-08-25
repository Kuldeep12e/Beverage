import React from 'react'
import { Navbar } from '../Component/Navbar'
import './page.css'
import { Beer } from '../Component/Beer'

export const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className='img-homepage'>
          <img src='bottle-caps-4890369.jpg' ></img>
        </div>
        <div className='img-text'>
          <p>
          "Raise a Glass, Savor the Craft.
          Discover the Brew, Taste the Difference."
          </p>
        </div>
        <Beer/>
    </div>
  )
}
