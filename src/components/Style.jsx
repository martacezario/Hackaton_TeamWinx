import styled, { keyframes } from "styled-components";
import Background from "../assets/bground1.png";



// Estilização Header
export const Header = styled.header`
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

// Estilização da NAV

export const Nav = styled.nav`
  width: 100vw;
  height: 50vh;
  
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 1.3em;
`;

export const Div1 = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  margin-top:90px;
 
  

`
// estilização da main

export const H1 = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 2.5em;
`
export const H2 = styled.h2`
 font-family: 'Roboto', sans-serif;
 font-size: 2.2 em;

  
`
export const SectionMain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  p{

   font-size:1.3em;
   font-family: 'Roboto', sans-serif;
  }

`
// estilização botões da Main 

export const ButtonAgOnline = styled.button`
height: 30vh;
width: 10vw;
background-color: #02026B;
border-radius:20px;
color: white;
font-size: 1.3em;
cursor: pointer;
border: 2px solid transparent;
  transition: border 0.3s ease;

  &:hover {
    border: 2px solid greenyellow; /* Borda azul ao passar o mouse */
  }
;

`

export const ButtonAgPresencial = styled.button`
height: 30vh;
width: 10vw;
background-color: #68D4E3;
border-radius:20px;
color: #02026B;
font-size: 1.3em;
cursor: pointer;
transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Aumenta ligeiramente o tamanho do botão */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* Sombra ao passar o mouse */
  }
  
`
