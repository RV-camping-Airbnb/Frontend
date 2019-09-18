import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className='navBar'>
      <NavLink to='/'>
        Home
      </NavLink>
    </div>
  )
}

export default Navigation
