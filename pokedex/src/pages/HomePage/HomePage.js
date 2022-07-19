import React, { useState, useEffect} from "react";
import Logo from '../../Img/logo.png'
import {HomeContainer,HeaderHome,ImgLogo,HomeMain, HeaderButton } from "./HomePage.styled"
import {useNavigate} from "react-router-dom"
import axios from "axios";


function HomePage() {
  const navigate = useNavigate()

  const goToPokedex = ()=>{
    navigate("/pokedex")

  }

  const [pokeList, setPokeList] = useState([]);
  const [pokeDetails, setPokeDetails] = useState([]);
  useEffect(() => { 
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=20")
      .then((res) => {
        setPokeList(res.data.results)
        
      })
      .catch((err) => {
        console.log(err.response);
      }); 
  },  [ ]);
 
  useEffect(() =>{
    const newList =[];
    pokeList.map((poke) =>{
      axios
      .get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
      .then((res)=> {
        newList.push(res.data);
        if(newList.length === 20) {
          setPokeDetails(newList);
        }
        
      });
    });

  },[pokeList]);

//   const pokeDetail = pokeList.length === 20 && pokeList.map((pokemon) => {
//    const novaLista = []
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
//     .then((res) => {
//       novaLista.push(res.data) 
//       console.log(novaLista)
//     })
//     .catch((err) => {
//       console.log(err);
//     }); 
// })



  console.log(pokeDetails)
  return (
    <HomeContainer>
      <HeaderHome>
        <ImgLogo src={Logo} alt="logo pokemon"/>
        <HeaderButton onClick={goToPokedex}>Pokédex</HeaderButton>
      </HeaderHome>
      <HomeMain>
        <h1>Todos Pokémons</h1>
         oi eu sou a home page
         {pokeDetails.map((poke) => {
        return <img src={poke.sprites.front_shiny} />;
        })}
      </HomeMain>
    </HomeContainer>
  );
}

export default HomePage;