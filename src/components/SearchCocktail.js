import React, { useState } from 'react'

export default function SearchCocktail({ handleClick }) {
    const [inputText, setInputText] = useState("");

    function handleText(e) {
        setInputText(e.target.value);
    }

    function handleKeyPress(e) {
        if (e.key === "Enter") {
            handleClick(inputText);
        }
    };


    return (
        <div className='search-box'>
            <input type='text' name='search' id='search'
                value={inputText}
                onChange={handleText}
                onKeyDown={handleKeyPress}>
            </input>
            <button  onClick={() => handleClick(inputText)}>Search</button>
        </div>
    )
}
