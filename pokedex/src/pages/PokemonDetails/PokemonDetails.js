import React from "react";
import Logo from "../../Img/logo.png"
import {HomeContainer,HeaderHome,ImgLogo,HomeMain } from "../HomePage/HomePage.styled"
import { HeaderButtonPokedex } from "./PokemonDetails.styled";
import {useNavigate} from "react-router-dom"


function PokemonDetails(props) {
  const navigate = useNavigate()

  const goBack = ()=>{
    navigate(-1)
  }
  return (
    <HomeContainer>
      <HeaderHome>
      <h3 onClick={goBack}>Todos Pokémons</h3>
      <ImgLogo src={Logo} alt="logo pokemon"/>
      <HeaderButtonPokedex>Excluir da Pokédex</HeaderButtonPokedex>
      </HeaderHome>
      <HomeMain>
        <div>
        <img src={props.details?.sprites.front_default}/>
        <img src={props.details?.sprites.back_default}/>
        
        {props.details?.name}
         
        </div>
      </HomeMain>
    </HomeContainer>
  );
}

export default PokemonDetails;