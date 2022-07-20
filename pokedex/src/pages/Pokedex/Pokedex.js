import React, { useState, useEffect} from "react";
import Logo from "../../Img/logo.png"
import {HomeContainer,HeaderHome,ImgLogo,HomeMain } from "../HomePage/HomePage.styled"
import {useNavigate} from "react-router-dom"
import {H3Header} from "./Pokedex.styled"

function Pokedex() {
const navigate = useNavigate()
const goToHome = ()=>{
    navigate("/")
  }
  return (
    <HomeContainer>
      <HeaderHome>
        <H3Header onClick={goToHome}> Todos Pokémons</H3Header>
        <ImgLogo src={Logo} alt="logo pokemon"/>
      </HeaderHome>
      <HomeMain>
        
      </HomeMain>
    </HomeContainer>
  );

  
}

export default Pokedex;