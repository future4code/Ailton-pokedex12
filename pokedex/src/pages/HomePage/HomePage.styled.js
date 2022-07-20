import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const HeaderHome = styled.header`
  height: 20vh;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-around ;
  border: 1px solid black;
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
  height: 90vh;
  background-color: grey;
  h1{
    color: white;

  }
`
