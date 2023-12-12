import React from 'react'
import { Link } from "react-router-dom";

export default function Cocktail({ idDrink, name, image, alc, category, hanldeIdCocktail}) {


  return (
    <div className='cocktail-card'>
      <div>
        <img className='imagecard' src={image} alt={`cocktail ${name}`}></img>
      </div>
      <div className='infocard'>
        <p className='name'>{name}</p>
        <p className='category'>{category}</p>
        <p>{alc}</p>
        <Link className='link' to={`/cocktailpage`} onClick={() => hanldeIdCocktail(idDrink)}>Details</Link>
      </div>
    </div>
  )
}
