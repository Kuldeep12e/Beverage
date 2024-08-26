import React from 'react';
import './component.css';
import { NavLink } from 'react-router-dom';

export const BeerDiv = ({ name, image, handleClick, id }) => {
  return (
    <div className='product'>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>Rs 2000</p>
      <NavLink to = '/detail'>
      <button onClick={() => handleClick(id , name)}>Details</button> 
      </NavLink>
    </div>
  );
};
