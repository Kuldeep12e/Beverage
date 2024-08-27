import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { useLocation } from 'react-router-dom';
import Footer from './Footer';

export const Detail = () => {
  const location = useLocation();
  const { result } = location.state || {}; 
 

  if (!result) {
    return <div>No details available</div>;
  }

  const ingredients = [
    result.strIngredient1,
    result.strIngredient2,
    result.strIngredient3,
    result.strIngredient4,
    result.strIngredient5, 
    result.strIngredient6,
    result.strIngredient7,
    result.strIngredient8,
    result.strIngredient9,
    result.strIngredient10,
    
  ].filter(Boolean);

  return (
    <div>

   <Navbar/>
    <div className='detail-section'>
      <img src={result.strDrinkThumb} alt={result.strDrink} />
      <div className='details-content'>
      <h1> {result.strDrink}</h1>
      <p><span>Type</span> : {result.strAlcoholic}</p>
      <p><span>Category</span> : {result.strCategory}</p>
      <p><span>Ingredient</span> : {ingredients.join(' ')}</p>
      <p><span>Instruction</span> : {result.strInstructions}</p>
      </div>
    
    </div>
    <Footer/>
    </div>
  );
};
