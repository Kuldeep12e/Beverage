import React from 'react';
import './component.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo-section'>
        <NavLink to= '/' >
        <img className='logo' src='cocktail-svgrepo-com.svg' alt='Logo' />
        </NavLink>
        <h2>Beverages</h2>  
      </div>

      <div className='nav-links'>
        <NavLink to='/' className='nav-item' activeClassName='active'>
          Home
        </NavLink>
        <NavLink to='/product' className='nav-item' activeClassName='active'>
          Products
        </NavLink>
        <NavLink to='/about' className='nav-item' activeClassName='active'>
          About
        </NavLink>
      </div>
    </div>
  );
}
