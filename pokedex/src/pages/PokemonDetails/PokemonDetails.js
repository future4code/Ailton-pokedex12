import React from "react";
import Logo from "../../Img/logo.png"
import {HomeContainer,HeaderHome,ImgLogo,HomeMain } from "../HomePage/HomePage.styled"
import { ContainerDetail,HeaderButtonPokedex,CardFront, CardBack, CardImg, CardBaseStatus, CardStatus, CardBaseMoves, CardMoves} from "./PokemonDetails.styled";
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
            {
              props.details.abilities.map(pokemom => {
                return(
                  <>
                    <p>{pokemom.ability.name}</p>
                  </>
                )
              })
            }
            </CardMoves>
          </CardBaseMoves>
         
           
          
         
        </ContainerDetail>
      </HomeMain>
    </HomeContainer>
  );
}

export default PokemonDetails;