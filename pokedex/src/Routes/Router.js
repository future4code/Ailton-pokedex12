import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage";
import Pokedex from "../pages/Pokedex/Pokedex"
import PokemonDetails from "../pages/PokemonDetails/PokemonDetails"

export const  Router = ()=>{

  return(
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route exact path="/pokedex" element={<Pokedex/>}/>
      <Route exact path="/pokedex/details" element={<PokemonDetails/>}/>
    </Routes>
    </BrowserRouter>
  )
}

