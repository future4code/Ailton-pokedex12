import React, {useState}from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage";
import Pokedex from "../pages/Pokedex/Pokedex"
import PokemonDetails from "../pages/PokemonDetails/PokemonDetails"

export const  Router = ()=>{
const [details, setDetails]= useState({})


  return(
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage setDetails={setDetails}/>}/>
      <Route exact path="/pokedex" element={<Pokedex/>}/>
      <Route exact path="/pokedex/details/:name" element={<PokemonDetails details={details}/>}/>
    </Routes>
    </BrowserRouter>
  )
}

