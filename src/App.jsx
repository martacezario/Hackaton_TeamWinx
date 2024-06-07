import React from "react";
import "./App.css";
import {createGlobalStyle} from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main.jsx";

import LandingPage from "./components/Main/landingPage.jsx";
import Cadastro from "./components/Main/cadastro.jsx";

import MeusDados from "./components/Paciente/meusDados";
import Historico from "./components/Paciente/historico";
import Consultas from "./components/Paciente/consultas";


const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
      
       
    }
`


function App (){
    return(
        <>

            <GlobalStyle/>

            <BrowserRouter>
                <Routes>

                    {/* Area Principal */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/cadastro" element={<Cadastro />} /> 

                    {/* Area Paciente */}
                    <Route path="/meusDados" element={<MeusDados />} />
                    <Route path="/historico" element={<Historico/>} />
                    <Route path="/consultas" element={<Consultas />} />

                </Routes>
            </BrowserRouter>
       
       
        
        </>
    )
}

export default App;