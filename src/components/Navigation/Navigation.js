import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className='navBar'>
      <NavLink to='/'>
        Home
      </NavLink>
      <NavLink to='/login'>
        Login
      </NavLink>
      <NavLink to='/signup'>
        Sign-Up
      </NavLink>
      <NavLink to='/favorites'>
        Favorites
      </NavLink>
    </div>
  )
}

export default Navigation