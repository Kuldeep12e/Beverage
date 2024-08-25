import React, { useEffect, useState } from 'react';
import './component.css';
import { BeerDiv } from './BeerDiv';
import { Loader } from './Loader';
 

export const Beer = () => {
  const [data ,setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const fetchData = async() =>{
      try{
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
      const result = await response.json();
      console.log("data is" , result);
      setData(result.drinks); 
      setLoading(false); 
      }catch(error){
        console.error('Error fetching data:', error);

        setLoading(false);
      }

    };
    fetchData();
  } , []);

  return (
    <div className='product-section'>
      <h2>Explore the Best</h2>
      {loading ? ( 
        <Loader/>
      ) : (
        <div className='products'>
          {data.map((drink, index) => (
            <BeerDiv key={index} name={drink.strDrink} image={drink.strDrinkThumb} />
          ))}
        </div>
      )}
    </div>
  );
};