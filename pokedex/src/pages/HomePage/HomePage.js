import React from "react";
import Logo from '../../Img/logo.png'
import {HomeContainer,HeaderHome,ImgLogo,HomeMain } from "./HomePage.styled"
import {useNavigate} from "react-router-dom"


function HomePage() {
  const navigate = useNavigate()

  const goToPokedex = ()=>{
    navigate("/pokedex")
  }
  return (
    <HomeContainer>
      <HeaderHome>
        <ImgLogo src={Logo} alt="logo pokemon"/>
        <button onClick={goToPokedex}>Pokédex</button>
      </HeaderHome>
      <HomeMain>
        <h1>Todos Pokémons</h1>
      oi eu sou a home page
      </HomeMain>
    </HomeContainer>
  );
}

export default HomePage;