import React, { useEffect, useState } from 'react';
import './component.css';
import { BeerDiv } from './BeerDiv';
import { Loader } from './Loader';

export const Beer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ result , setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
        const result = await response.json();
        setData(result.drinks);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  
  
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
              result = {result}
            />
          ))}
        </div>
      )}
    </div>
  );
};
