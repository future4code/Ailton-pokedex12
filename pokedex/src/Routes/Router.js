import React, {useState}from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage";
import Pokedex from "../pages/Pokedex/Pokedex"
import PokemonDetails from "../pages/PokemonDetails/PokemonDetails"

export const  Router = ()=>{
const [details, setDetails]= useState({})
const [pokeList, setPokeList] = useState([]);
const [pokeDetails, setPokeDetails] = useState([]);
const [pokedex,setPokedex]=useState([])



const addPokemon = (info)=>{
  const filterPokemons = pokeDetails.filter((dado)=>{
    return dado.id=== info
  });
  const pokedexCopy=[...pokedex]
  pokedexCopy.push(filterPokemons[0])
  setPokedex(pokedexCopy)
  alert("Pokémon Capturado! Não clique no mesmo pokémon")
}
 const removePokemon = (id) => {    
  if (window.confirm('Tem certeza que deseja remover esse Pokemon da Pokédex?')) {
  const deletePokemon = pokedex.filter((dados) => {
    return dados.id !== id;
  });
  setPokedex(deletePokemon);
}
};
  return(
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage setDetails={setDetails} addPokemon={addPokemon} pokeList={pokeList} setPokeList={setPokeList} pokeDetails={pokeDetails} setPokeDetails={setPokeDetails}/>}/>
      <Route exact path="/pokedex" element={<Pokedex  setDetails={setDetails} pokedex={pokedex} setPokedex={setPokedex} removePokemon={removePokemon}/>}/>
      <Route exact path="/pokedex/details/:name" element={<PokemonDetails details={details}/>}/>
    </Routes>
    </BrowserRouter>
  )
}

