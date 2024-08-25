import React from 'react';
import './component.css';

export const BeerDiv = ({ name, image }) => {
  return (
        <div className='product'>
          <img src={image} alt={name} />
          <p>{name}</p>
          <p>Rs 2000</p>
          <button>Details</button>
        </div>
   
  );
};
