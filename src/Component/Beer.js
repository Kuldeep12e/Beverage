import React, { useEffect, useState } from 'react';
import './component.css';
import { BeerDiv } from './BeerDiv';
import { Loader } from './Loader';

export const Beer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
        const result = await response.json();
        console.log(result);
        setData(result.drinks);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleClick = (id , name) => {
    
  };

  return (
    <div className='product-section'>
      <h2>Explore the Best</h2>
      {loading ? (
        <Loader />
      ) : (
        <div className='products'>
          {data.map((drink) => (
            <BeerDiv
              key={drink.idDrink}
              id={drink.idDrink}
              name={drink.strDrink}
              image={drink.strDrinkThumb}
              handleClick={handleClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};
