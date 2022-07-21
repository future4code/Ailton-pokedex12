import React, { useState, useEffect} from "react";
import Logo from '../../Img/logo.png'
import {HomeContainer,HeaderHome,ImgLogo,HomeMain, HeaderButton,CardHome, Card, CardPart1, Pid,PName,ContainerTypes, PokeImg,CardPart2} from "./HomePage.styled"
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
  useEffect(() => { 
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=20")
      .then((res) => {
        props.setPokeList(res.data.results)
        
      })
      .catch((err) => {
        console.log(err.response);
      }); 
  },  [ ]);
  useEffect(() =>{
    const newList =[];
    props.pokeList.map((poke) =>{
      axios
      .get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
      .then((res)=> {
        newList.push(res.data);
        if(newList.length === 20) {
          props.setPokeDetails(newList);
        }
        
      });
    });

  },[props.pokeList]);
  return (
    <HomeContainer>
      <HeaderHome>
        <ImgLogo src={Logo} alt="logo pokemon"/>
        <HeaderButton onClick={goToPokedex}>Pokédex</HeaderButton>
      </HeaderHome>
      <HomeMain>
        <h1>Todos Pokémons</h1>
        <CardHome>
          {props.pokeDetails?.map((poke) => {
          return (
          <Card key={poke.id}>
            <CardPart1>
            <div>
            <Pid><strong>#{poke.id}</strong></Pid>
            <PName>{poke.name}</PName>
            <ContainerTypes>
            <p>{poke.types[0].type.name}</p>
            <p>{poke.types[1]?.type.name}</p>
            </ContainerTypes>
            </div>
            <div>
            <PokeImg src={poke.sprites.other["official-artwork"].front_default} alt={poke.name}/>
            </div>
            </CardPart1>
            <CardPart2>
              <p onClick={()=>{
                goToDetails(poke.name)
                props.setDetails(poke)}}>Detalhes</p>
              <button onClick={()=>props.addPokemon(poke.id)}>Capturar!</button>
            </CardPart2>
          </Card>
          )})}
        </CardHome>
      </HomeMain>
    </HomeContainer>
  );
}

export default HomePage;