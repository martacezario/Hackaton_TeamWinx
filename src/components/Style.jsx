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

export const buttonCad = styled.button`

height: 5vh;
width: 10vw;
border-radius:10px;
background-color: #070c71;
color: white;
font-family: 'Roboto', sans-serif;
cursor: pointer;



`
// estilização da main

export const H1 = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 50px;
`
export const H2 = styled.h2`
 font-family: 'Roboto', sans-serif;
 font-size: 2.2 em;


  
`
export const ContainerSectionMain = styled.div`
display: flex;
// flex-direction:column;
justify-content:space-around;
 align-items: center;
 border:solid black 3px;


`
export const SectionMain = styled.section`
 display: flex;
 width:50%;
 height:70vh;
 flex-direction: column;
 align-items: center;
 justify-content:space-around;


 /*
 Responsive
 
 display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  padding-top: 5rem; 
  */ 
  
  
  p{

   font-size:1.3em;
   font-family: 'Roboto', sans-serif;
   padding-top: 2rem;
     height:40vh;
     font-size:30px;
  }

  h2 {
   border-bottom: 3px solid;
   border-image: linear-gradient(90deg, #070c71,  #68d4e3) 1;
   padding-bottom: 20px;
   font-size: 50px;
   font-weight:35;
   
}

`
export const DivGrid = styled.div`
 display: flex;
 padding-top:4rem;
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
    transform: scale(1.05); 
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); 
  }
  
`
