import styled from "styled-components";
import Pokebola from "../../Img/pokebola.png"

export const HomeContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HeaderHome = styled.header`
  height: 20vh;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-around ;
  align-items: center;
`
export const ImgLogo = styled.img`
  width: 400px;
  height: 150px;
`
export const HeaderButton= styled.button`
  height: 74px;
  width: 287px;
  border-radius: 8px;
  background: #33A4F5;
  color: #FFFFFF;
  border: 1px solid white;
  font-size: x-large;
`
export const HomeMain = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  background-color: grey;
  margin: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1{
    color: white;
    height: 10vh;
  }
`
export const CardHome = styled.div`
  width: 100%;
  min-height: 70vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  margin: 0 auto;
`
export const Card = styled.div`
  background-image: url(${Pokebola});
  background-color: #5269AC;
  background-size: 250px;
  background-repeat: no-repeat;
  background-position: top right;
  width: 440px;
  height: 210px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const CardPart1 = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  justify-content:space-around;
`
export const Pid= styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-top: 25px;
  margin-bottom: 2px;
  color: #FFFFFF;
`
export const PName= styled.p`
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  color: #FFFFFF;
`
export const ContainerTypes = styled.div`
  display: flex;
  gap: 17px;
  p{
    background-color: red;
    border-radius: 8px;
    padding: 5px 8px 5px 8px;
  }
`
export const PokeImg = styled.img`
  height:193px; 
  width: 193px;
  position: relative;
  top:-35%;
`
export const CardPart2 = styled.div`
 width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  button{
  height: 38px;
  width: 146px;
  border-radius: 8px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  }
  p{
  height: 24px;
  width: 74px;
  font-family: Poppins;
  color:#FFFFFF ;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  }
`