import React from "react";
import Logo from "../../Img/logo.png"
import {HomeContainer,HeaderHome,ImgLogo,HomeMain } from "../HomePage/HomePage.styled"
import {useNavigate} from "react-router-dom"



function Pokedex() {
const navigate = useNavigate()

const goToHome = ()=>{
    navigate("/")
  }
  return (
    <HomeContainer>
      <HeaderHome>
        <h3 onClick={goToHome}> Todos Pokémons</h3>
        <ImgLogo src={Logo} alt="logo pokemon"/>
      </HeaderHome>
      <HomeMain>

      </HomeMain>
    </HomeContainer>
  );
}

export default Pokedex;