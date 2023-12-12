import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';
import Main from '../components/Main';
import SearchCocktail from '../components/SearchCocktail';
import React from 'react';

export default function Home({ handleClick, cocktails, hanldeIdCocktail, loading }) {

    if (loading) {
        return (
            <div>
                <SearchCocktail handleClick={handleClick} />
                <Loading />
            </div>
        )
    } else {
        return (
            <div>
                <SearchCocktail handleClick={handleClick} />
                <div>
                    {Object.keys(cocktails).length !== 0 ?
                        <Main cocktails={cocktails} hanldeIdCocktail={hanldeIdCocktail} /> :
                        <ErrorMessage />}
                </div>
            </div>
        )
    
    }
}
