import React from 'react';
import { useNavigate } from 'react-router-dom';
import './component.css';

export const BeerDiv = ({ name, image, handleClick, id }) => {
  const navigate = useNavigate();

  const handleDetailsClick = async () => {
    const result = await handleClick(id);
    navigate('/detail', { state: { result } });
  };

  return (
    <div className='product'>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>Rs 2000</p>
      <button onClick={handleDetailsClick}>Details</button>
    </div>
  );
};
