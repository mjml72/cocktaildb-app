import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';

export default function CocktailPage({ idCocktail }) {
    const [cocktail, setCocktail] = useState({});
    const [ingredients, setIngredients] = useState("");
    const [loading, setLoading] = useState(false);

    function ingredientsList(obj) {
        let array = [];
        for (let i = 1; i <= 10; i++) {
            if (obj["strIngredient" + i.toString()]) {
                array.push(obj["strIngredient" + i.toString()]);
            }
        }
        let list = array.join(" , ");
        setIngredients(list);
    }

    useEffect(() => {
        setLoading(true);
        async function fetchDrink() {
            try {
                let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idCocktail}`);
                let data = await response.json();
                if (response.status === 200) {
                    setCocktail(data.drinks[0]);
                    ingredientsList(data.drinks[0]);
                    setLoading(false);
                }

            } catch (error) {
                setCocktail({});
                setLoading(false);
            }
        }

        fetchDrink();
    }, [idCocktail]);

    if (loading) {
        return (
            <Loading />
        )
    } else {
        return (
            <div>
                < Link className='link' to="/" > Back</Link >
                {
                    Object.keys(cocktail).length === 0 ?
                        <ErrorMessage /> :
                        <div>
                            <div className='big-cocktail-card'>
                                <p className='bigname'>{cocktail && cocktail.strDrink}</p>
                                <div>
                                    <img className='bigimagecard' src={cocktail.strDrinkThumb} alt={`cocktail ${cocktail.strDrink}`}></img>
                                </div>
                                <div className='infobigcard'>
                                    <p><strong>Category : </strong><span>{cocktail.strCategory}</span></p>
                                    <p><strong>Alcoholic : </strong><span>{cocktail.strAlcoholic}</span></p>
                                    <p><strong>Glass : </strong><span>{cocktail.strGlass}</span></p>
                                    <p><strong>Ingredients : </strong><span>{ingredients}</span></p>
                                    <p><strong>Instructions : </strong><span>{cocktail.strInstructions}</span></p>
                                </div>
                            </div>
                        </div>
                }
            </div>

        )

    }
}
