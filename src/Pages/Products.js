import React, { useState } from 'react';
import { Navbar } from '../Component/Navbar';
import './page.css';
import { CiSearch } from 'react-icons/ci';
import { Beer } from '../Component/Beer';
import { BeerDiv } from '../Component/BeerDiv';
import { Loader } from '../Component/Loader';
import Noproduct from '../Component/Noproduct';
import Footer from '../Component/Footer';

export const Products = () => {
  const[loading , setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);

  const handleSearchChange = (e) => {
    console.log(e.target.value);
    setSearchQuery(e.target.value);
  };

  const handleSearch = async () => {
    if (searchQuery.trim() === '') return;

  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`);
    const result = await response.json();
    console.log("result" , result);
    setData(result.drinks);
    console.log("data" , data );
    setLoading(false);
  } catch (error) {
    console.error('Error fetching search results:', error);
    setData([]); 
    setLoading(false);
  }
};

const handleClick = async (id) => {
  try {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const detail = await res.json();
    console.log(detail);
    return detail.drinks[0]; 
  } catch (error) {
    console.error('Error fetching details:', error);
    return null; 
  }
};




return (
  <div className='search-product-section'>
    <Navbar />
    <div className='search-product'>
      <div className='search-product-page'>
        <input
          type='text'
          placeholder='Search here'
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearch();
          }}
        />
        <div className='search-icon' onClick={handleSearch}>
          <CiSearch />
        </div>
      </div>
    </div>
    {loading ? (
      <Beer/>
    ) : data && data.length > 0  ? (
      <div className='products'>
        {data.map((drink) => (
          <BeerDiv key={drink.idDrink} name={drink.strDrink} image={drink.strDrinkThumb} handleClick={handleClick} />
        ))}
      </div>
    ) : (
     < Noproduct/>
    )}
   
  </div>
);
};