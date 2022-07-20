import React, { useState, useEffect} from "react";
import Logo from '../../Img/logo.png'
import {HomeContainer,HeaderHome,ImgLogo,HomeMain, HeaderButton,CardHome, CardDIV } from "./HomePage.styled"
import {useNavigate} from "react-router-dom"
import axios from "axios";


function HomePage(props) {
  const navigate = useNavigate()

  const goToPokedex = ()=>{
    navigate("/pokedex")

  }
  const goToDetails = (name)=>{
    navigate(`/pokedex/details/${name}`)
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
  
  return (
    <HomeContainer>
      <HeaderHome>
        <ImgLogo src={Logo} alt="logo pokemon"/>
        <HeaderButton onClick={goToPokedex}>Pokédex</HeaderButton>
      </HeaderHome>
      <HomeMain>
        <h1>Todos Pokémons</h1>
        <CardHome>
          {pokeDetails?.map((poke) => {
          return (
          <CardDIV key={poke.id}>
            <p>{poke.name}</p>
            <p>{poke.types[0].type.name}</p>
            <p>{poke.types[1]?.type.name}</p>
            <img src={poke.sprites.other.dream_world.front_default}/>
            <div>
              <p onClick={()=>{
                goToDetails(poke.name)
                props.setDetails(poke)}}>Detalhes</p>
              <button>Capturar!</button>
            </div>
          </CardDIV>
          )})}
        </CardHome>
      </HomeMain>
    </HomeContainer>
  );
}

export default HomePage;