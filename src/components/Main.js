import Cocktail from "./Cocktail";
import React from 'react';
export default function Main({ cocktails, hanldeIdCocktail }) {
  
  return (
    <div className='main'>
      {cocktails.drinks && cocktails.drinks.map((item) => {
        return <Cocktail key={item.idDrink}
         idDrink={item.idDrink}
         name={item.strDrink}
         alc={item.strAlcoholic}
         category={item.strCategory}
         image={item.strDrinkThumb}
         hanldeIdCocktail={hanldeIdCocktail}
          />
      })}
    </div>
  )
}
