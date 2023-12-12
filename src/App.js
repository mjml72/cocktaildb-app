import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import CocktailPage from "./pages/CocktailPage";
import Home from './pages/Home';
import { useState, useEffect } from 'react';
import React from 'react'
import './styles/App.css';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState({});
  const [fetching, setFetching] = useState(true);
  const [idCocktail, setIdCocktail] = useState(null);
  const [text, setText] = useState("");


  function handleClick(text) {
    setFetching(true);
    setText(text);
  }

  function hanldeIdCocktail(id) {
    setIdCocktail(id);
  }
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      if (fetching) {
        try {
          let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`);
          let data = await response.json();

          if (response.status === 200) {
            if (data.drinks === null) { 
              setCocktails({});
             } else {
              setCocktails(data);
            }
            setFetching(false);
            setLoading(false);
          }
        } catch (error) {
          setFetching(true);
          setCocktails({});
          setLoading(false);
          console.log(error);
        }
      } else {
        return;
      }
    }
    fetchData();
  }, [text]);


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home handleClick={handleClick} cocktails={cocktails} loading={loading} hanldeIdCocktail={hanldeIdCocktail} />} />
          <Route path='cocktailpage' element={<CocktailPage idCocktail={idCocktail} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}



