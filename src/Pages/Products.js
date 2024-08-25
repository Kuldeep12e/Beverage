import React from 'react';
import { Navbar } from '../Component/Navbar';
import './page.css';
import { CiSearch } from 'react-icons/ci';
import { Beer } from '../Component/Beer';

export const Products = () => {
  return (
    <div className='search-product-section'>
      <Navbar />
      <div className='search-product'>
        <div className='search-product-page'>
          <input type='text' placeholder='search here' />
          <div className='search-icon'>
            <CiSearch />
          </div>
        </div>
      </div>
      <Beer />
    </div>
  );
};
