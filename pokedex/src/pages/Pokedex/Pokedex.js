import React, { useState, useEffect} from "react";
import Logo from "../../Img/logo.png"
import {HomeContainer,HeaderHome,ImgLogo,HomeMain, CardHome, Card,CardPart1,CardPart2,Pid,PName,PokeImg,ContainerTypes } from "../HomePage/HomePage.styled"
import {useNavigate} from "react-router-dom"
import {H3Header, RemoveButton} from "./Pokedex.styled"

function Pokedex(props) {
const navigate = useNavigate()
const goToHome = ()=>{
    navigate("/")
  }
const goToDetails = (name)=>{
    navigate(`/pokedex/details/${name}`)
  }
  return (
    <HomeContainer>
      <HeaderHome>
        <H3Header onClick={goToHome}> Todos Pokémons</H3Header>
        <ImgLogo src={Logo} alt="logo pokemon"/>
      </HeaderHome>
      <HomeMain>
        <h1>Meus Pokémons</h1>
        <CardHome>
          {props.pokedex?.map((poke) => {
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
              <RemoveButton onClick={()=>props.removePokemon(poke.id)}>Excluir</RemoveButton>
            </CardPart2>
          </Card>
          )})}
        </CardHome>
      </HomeMain>
    </HomeContainer>
  );

  
}

export default Pokedex;