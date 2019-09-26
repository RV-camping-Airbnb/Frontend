import React from 'react'
import Hero from '../../images/Hero.jpg'

function HomePage() {

  return (
    <div className="homePage">
      <h1>Welcome To RVNB</h1>
      <img className="heroImg" src={Hero} alt='Hero' />
    </div>
  )
}

export default HomePage;