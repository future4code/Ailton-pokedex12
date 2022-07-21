import React from "react";
import Logo from "../../Img/logo.png"
import { ContainerDetail, HeaderButtonPokedex,CardFront, CardBack, CardImg, CardBaseStatus, CardStatus, CardBaseMoves, CardMoves, CardFinal} from "./PokemonDetails.styled";
import {HomeContainer,HeaderHome,ImgLogo,HomeMain } from "../HomePage/HomePage.styled"


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
        <ContainerDetail key={props.details?.name}>
          <CardImg>
           <CardFront>
              <img src={props.details?.sprites.front_default} alt="Pokemom"/>
            </CardFront>
           <CardBack>
             <img src={props.details?.sprites.back_default} alt="Pokemom"/>
           </CardBack>
          </CardImg>
          <CardBaseStatus>
            <CardStatus>
              <h2>Base Status</h2>
              {
              props.details.stats.map(pokemom => {
                return(
                  <>
                    <p>{pokemom.stat.name}: {pokemom.base_stat}</p>
                  </>
                )
              })
            }
            </CardStatus>  
          </CardBaseStatus>
          <CardBaseMoves>
            <CardMoves>
              <h2>Moves:</h2>
              <p>{props.details.moves[0].move.name}</p>
              <p>{props.details.moves[1].move.name}</p>
              <p>{props.details.moves[2].move.name}</p>
              <p>{props.details.moves[3].move.name}</p>
            </CardMoves>
          </CardBaseMoves>
          <CardFinal>

          <h2>#{props.details.id}</h2>
          <h2>{props.details.name}</h2>
          {
              props.details.types.map(poketype => {
                return(
                  <>
                    <CardFinal>{poketype.type.name}</CardFinal>
                  </>
                )
              })
            }
          <img src={props.details?.sprites.other.home.front_default} alt="Pokemom"/> 
          </CardFinal>
          
         
        </ContainerDetail>
      </HomeMain>
    </HomeContainer>
  );
}

export default PokemonDetails;